形態素解析アプリケーション（java EE jBatchのサンプル）
======================================================

## 1. このアプリケーションについて
このアプリケーションは、java EE 7の新仕様である、jBatchを利用したサンプルアプリケーションです。<br>
青空文庫にある文学作品の文字列を形態素解析（単語に分割する処理）し、結果をデータベースに保存します。言語統計解析の前処理に当たる部分を、バッチジョブとして実装したという想定です。

このアプリケーションでは、jBatchのパーティショニングを利用した並列処理を実装しており、ジョブの開始時に、パーティション数とスレッド数を指定することができます。

### 1-1. 前提条件
このアプリケーションは、以下の環境で動作することを確認しています。

- アプリケーションサーバー: Oracle WebLogic Server 12.2.1
- データベース: Oracle Database 11g Express Edition


## 2. アプリを動かす手順
このアプリケーションを動作させるまでの手順を記します。

### 2-1. DBの準備
dbフォルダ配下に、本アプリのデータベースを構成するためのスクリプト群が格納されていますので、これらを利用してDBスキーマを作成します。

#### 2-1-1. Dockerコンテナ上でDBを利用する場合
Dockerのホストにdb/containerフォルダ配下の一式をコピーし、以下のコマンドを実行します。

    > cd ${db/container}
    > docker build -t ${image_name} .
    > docker run -d -p 1521:1521 --name=${container_name} ${image_nme}

${db/container}にはdb/containerディレクトリのパスを、${image_name}、${container_name}には任意のイメージ名、コンテナ名を指定して下さい。

docker buildコマンドで、Oracle Database Express EditionのDockerイメージを拡張して、本アプリに必要なスキーマを作成したイメージを作成します。
その後、dokcer runコマンドでコンテナを起動しています。

DBのコンテナが起動したら、以下のコマンドを実行して、コンテナに割り当てられたIPアドレスを確認します。このIPアドレスは、後の手順でデータソースの設定を行うときに必要になります。

    >  sudo docker inspect --format '{{ .NetworkSettings.IPAddress }}' admiring_turing

データベースのユーザーは以下の内容で作成されます。

- JobRepository
    * ユーザー名: repuser
    * パスワード: reppswd
- 形態素解析をかけて生成したデータの格納先
    * ユーザー名: linguistics
    * パスワード: linguistics

JobRepositoyとして、WebLogicのデフォルトのDerbyデータベースを利用する場合、上記のスキーマは使いません（スキーマがあっても使わないだけで、アプリの動作には影響ありません）。

#### 2-1-2. Dockerコンテナを利用しない場合
Dockerを利用しない場合、データベースは別途用意して下さい。

db/containerフォルダ配下の一式をデータベースサーバーにコピーして、以下のスクリプトを実行すると、必要なスキーマを作成することができます。

- JobRepository
    * db/container/jbatch/createJobRepository.sh
- 形態素解析をかけて生成したデータの格納先
    * db/container/linguistics/createLinguisticsSchema.sh

作成されるユーザーの、ユーザー名とパスワードは、Dockerを利用する場合と同様です。<br>
JobRepositoryとして、WebLogicのデフォルトのDerbyデータベースを利用する場合、JobRepositoryのスキーマ作成は不要です。

### 2-2. アプリケーションのビルド
appフォルダ以下がMavenのプロジェクトになっていますので、ビルド環境にMavenをインストールしてビルドを行います。<br>
以下、Mavenがインストール済みであるものとして手順を記します。

#### 2-2-1. 依存ライブラリの準備
依存ライブラリは基本的にMavenが自動的に解決してくれるはずですが、自動解決できない場合は、ライブラリを個別にダウンロードして、Mavenのローカルリポジトリにインストールする必要があります。

例えば、形態素解析ライブラリのkuromoji-coreをローカルリポジトリにインストールする場合、はじめに[Maven Repository](http://mvnrepository.com/artifact/com.atilika.kuromoji/kuromoji-core/0.9.0)からライブラリをダウンロードします。

続いて、ビルドを行うマシン上で、以下の様にコマンドを実行します。

    > mvn install:install-file -Dfile=path/to/file/kuromoji-core-0.9.0.jar -DgroupId=com.atilika.kuromoji -DartifactId=kuromoji-ipadic -Dversion=0.9.0 -Dpackaging=jar

コマンドの詳細は[Mavenの公式ドキュメント](https://maven.apache.org/guides/mini/guide-3rd-party-jars-local.html)を参照下さい。

この手順を、自動解決できないモジュールの分だけ繰り返します。


#### 2-2-2. ビルドの実行
以下のコマンドを実行します。

    > cd ${app}
    > mvn clean package

${app}は、コードのダウンロード後の、appフォルダのパスです。

ビルドに成功すると、${app}/targetフォルダにlinguistics-0.1.warというファイルが作成されます。

### 2-3. WebLogic Serverの設定
WebLogic Server管理コンソール等を利用して、WebLogic Serverに、本アプリの実行に必要な設定をおこないます。

以下、2-3-x. では、管理コンソールでの設定手順を記します。<br>
なお、各手順は、チェンジセンターの[ロックして編集]をクリックしてから実施します。また、手順実施後にはチェンジセンターの[変更のアクティブ化]をクリックしてください。

#### 2-3-1. jBatchのJobReposityに接続するためのデータソースの設定
（jBatchのJobRepositoryとして、Dervyデータベースを利用する場合、この手順は不要です。）

1. 管理コンソール左の、[ドメイン構造]で、[${ドメイン名}] > [サービス] > [データ・ソース]を選択
2. [JDBCデータ・ソースのサマリー]で、[新規] > [汎用データ・ソース]を選択
3. 以下、順次設定項目を入力しつつ画面を進めて行きます。各設定項目は、以下のように入力します。
    - 名前: （任意の名前。例: "Job Repository Data Source"）
    - スコープ: グローバル
    - JNDI名: （任意のJNDI名。例: "jdbc/JobRepository"）
    - データベースのタイプ: Oracle
    - データベース・ドライバ: \*Oracle's Driver (Thin XA) for Instance connections; Versions:Any
    - データベース名
    - ホスト名: （2-1-1. で確認した、DBのIPアドレス）
    - ポート: 1521
    - データベース・ユーザー名: repuser
    - パスワード: reppswd
    - 追加の接続プロパティ: （何も入力しない）
    - ターゲットの選択: （任意のターゲットを選択）

#### 2-3-2. バッチランタイムの設定
（jBatchのJobRepositoryとして、Dervyデータベースを利用する場合、この手順は不要です。）

1. 管理コンソール左の、[ドメイン構造]で、[${ドメイン名}]を選択
2. [${ドメイン名}の設定]で、[バッチ]タブを選択
3. 以下の設定項目を入力し、[保存]をクリック
    - データソースJNDI名: （3-2-1. で作成したデータソースのJNDI名）
    - スキーマ名: repuser

#### 2-3-3. 形態素解析で生成したデータの格納先に接続するためのデータソースの設定

1. 管理コンソール左の、[ドメイン構造]で、[${ドメイン名}] > [サービス] > [データ・ソース]を選択
2. [JDBCデータ・ソースのサマリー]で、[新規] > [汎用データ・ソース]を選択
3. 以下、順次設定項目を入力しつつ画面を進めて行きます。各設定項目は、以下のように入力します。
    - 名前: （任意の名前。例: "Linguistics Data Source"）
    - スコープ: グローバル
    - JNDI名: （任意のJNDI名。例: "jdbc/Linguistics"）
    - データベースのタイプ: Oracle
    - データベース・ドライバ: \*Oracle's Driver (Thin XA) for Instance connections; Versions:Any
    - データベース名
    - ホスト名: （2-1-1. で確認した、DBのIPアドレス）
    - ポート: 1521
    - データベース・ユーザー名: linguistics
    - パスワード: linguistics
    - 追加の接続プロパティ: （何も入力しない）
    - ターゲットの選択: （JobReositoryのデータソースと同じものを選択）

#### 2-3-4. アプリケーションのデプロイ
ビルドして作成したlinguistics-0.1.warをデプロイします。

1. 管理コンソール左の、[ドメイン構造]で、[${ドメイン名}] > [デプロイメント]を選択
2. [デプロイメントのサマリー]で、[インストール]をクリック
3. 以下、順次設定項目を入力しつつ画面を進めていきます。各設定項目は、以下のように入力します（記述のない項目は、デフォルトのままにします）。
    - インストール及びデプロイの準備をするデプロイメントの選択:
        * [ファイルのアップロード]をクリックして、linguistics-0.1.warをアップロードします。[管理サーバーへのデプロイメント]のアップロード]では、[デプロイメント・アーカイブ]の、[ファイルを選択]をクリックして、warをアップロードします
    - インストール・タイプおよびスコープの選択:
        * このデプロイメントをアプリケーションとしてインストールする
    - デプロイ・ターゲットの選択:
        * （JobReositoryのデータソースと同じものを選択）

### 2-4. ジョブの実行
本アプリケーションでは、バッチジョブを開始するためのインターフェースとして、RESTのAPIを提供します。

以下のURLにGETリクエストを送信することにより、ジョブを開始します。

    http://${host}:${port}/linguistics-0.1/resources/LinguisticsJobController/Start

ジョブが正常に実行されると、標準出力に以下のような内容が出力されます。

## 3. その他の操作

### 3-1. バッチ処理の並列化
以下のリクエストパラメータを指定してジョブを実行することにより、jBatchのpartitionを使った並列化をおこないます。

- パーティション数
    * パラメータ名: p
    * 値: （パーティション数を指定する数値）
    * デフォルト: 1
- スレッド数
    * パラメータ名: t
    * 値: （スレッド数を指定する数値）
    * デフォルト: 1

例えば、パーティションを3つに分けて3スレッドで処理する場合、以下のURLを指定します。

    http://${host}:${port}/linguistics-0.1/resources/LinguisticsJobController/Start?p=3&t=3

### 3-2. 処理結果のクリア
データベースに保存された形態素解析結果のデータを削除するには、/db/container/linguistics/clearLinguisticsSchema.shを実行します。

## 4. 謝辞
このアプリケーションは、以下のオープンソース・ライブラリを使用して開発されました。これらのプロジェクトの開発に関わった方々に感謝します。
I created this application using open source libraries below. I thank all developers of these projects.

- atilika - kuromoji（日本語形態素解析器 / Japanese morphological analyzer）
    * http://www.atilika.org/
    * https://github.com/atilika/kuromoji

