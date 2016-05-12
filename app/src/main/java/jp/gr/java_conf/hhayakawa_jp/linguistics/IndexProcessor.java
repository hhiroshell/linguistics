package jp.gr.java_conf.hhayakawa_jp.linguistics;

import java.io.BufferedReader;
import java.io.Closeable;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.LineNumberReader;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import javax.batch.runtime.context.JobContext;
import javax.inject.Inject;

/**
 * @author hhayakaw
 *
 */
public final class IndexProcessor {

    /**
     * インデックスファイルに対するBufferedReader
     */
    private BufferedReader br_index;
    /**
     * インデックスファイルに対するLineNumberReader
     */
    private LineNumberReader lr_index;
    /**
     * 分析対象のテキストファイルに対するBufferedReader
     */
    private BufferedReader br_data;
    /**
     * 分析対象のテキストファイルに対するLineNumberReader
     */
    private LineNumberReader lr_data;
    /**
     * クローズ対象のReaderオブジェクト格納する配列<br>
     * closeAll()を実行すると、この配列に格納した順にクローズが実行される
     */
    private Closeable[] readers = {lr_index, br_index, lr_data, br_data};
    /**
     * 読み込みを開始する、インデックスの行番号
     */
    private final int start;
    /**
     * 読み込みを終了する、インデックスの行番号
     */
    private final int end;
    /**
     * インデックスファイルのパス
     */
    private final Path index_path;
    /**
     * インデックスとデータファイルを格納したフォルダのルート
     */
    private final String root;
    /**
     * 現在のReaderが処理する作品の著者
     */
    private String author = null;
    /**
     * 現在のReaderが処理する作品の作品名（ファイル名）
     */
    private String piece = null;
    /**
     * 現在のReaderが処理する作品が、全体の何番目に当たるかを表す数値
     */
    private int processed = 0;
    /**
     * このIndexProcessorが処理する作品の数
     */
    private final int pieces;
    
    /**
     * インデックスとデータファイルを読み込む際の、文字コードのデフォルト 
     */
    private static final Charset DEFAULT_CHARSET = StandardCharsets.UTF_8;
    /**
     * インデックスとデータファイル読み込む際の文字コード
     */
    private Charset charset = DEFAULT_CHARSET;
    /**
     * jBatchのジョブコンテキスト
     */
    @Inject
    JobContext jobCtx;

    /**
     * IndexProcessorのインスタンスを取得する
     * 読み込み文字コードはUTF-8、ファイルの先頭から末尾までを読み込み対象とする
     * 
     * @param index インデックスファイルのFileオブジェクト
     * @return IndexProcessorのインスタンス
     * 
     * @throws IllegalArgumentException インデックスの読み込み開始位置が0以下の場合
     * @throws FileNotFoungException インデックスファイルの実体が存在しないか、ファイルではなかった場合
     * @throws NullPointerException インデックスファイルが指定されなかった場合
     */
    static IndexProcessor getIndexProcessor(File index)
            throws FileNotFoundException, IllegalArgumentException,
                   NullPointerException {
        return IndexProcessor.getIndexProcessor(index, null, 1, -1);
    }

    /**
     * IndexProcessorのインスタンスを取得する
     * ファイルの先頭から末尾までを読み込み対象とする
     * 
     * @param index インデックスファイルのFileオブジェクト
     * @param charset インデックスファイル、データファイル読み込み時の文字コード
     * @return IndexProcessorのインスタンス
     * 
     * @throws IllegalArgumentException インデックスの読み込み開始位置が0以下の場合
     * @throws FileNotFoungException インデックスファイルの実体が存在しないか、ファイルではなかった場合
     * @throws NullPointerException インデックスファイルが指定されなかった場合
     */
    static IndexProcessor getIndexProcessor(File index, Charset charset)
            throws FileNotFoundException, IllegalArgumentException,
                   NullPointerException {
        return IndexProcessor.getIndexProcessor(index, charset, 1, -1);
    }

    /**
     * IndexProcessorのインスタンスを取得する
     * 
     * @param index インデックスファイルのFileオブジェクト
     * @param charset インデックスファイル、データファイル読み込み時の文字コード
     * @param start インデックスファイルの読み込み開始行
     * @param end インデックスファイルの読み込み終了行
     * 
     * @return IndexProcessorのインスタンス
     * @throws IllegalArgumentException インデックスの読み込み開始位置が0以下の場合
     * @throws FileNotFoungException インデックスファイルの実体が存在しないか、ファイルではなかった場合
     * @throws NullPointerException インデックスファイルが指定されなかった場合
     */
    static IndexProcessor getIndexProcessor(
            File index, Charset charset, int start, int end)
            throws FileNotFoundException, IllegalArgumentException,
                   NullPointerException {
        return new IndexProcessor(index, charset, start, end);
    }

    private IndexProcessor(File index, Charset charset, int start, int end)
            throws FileNotFoundException, IllegalArgumentException,
                   NullPointerException {
        if (index == null) {
            throw new NullPointerException("Parameter \"index\" is null.");
        }
        if (!index.exists()) {
            throw new FileNotFoundException(index.getAbsolutePath());
        }
        if (!index.isFile()) {
            throw new FileNotFoundException("Prameter \"index\" is not file.");
        }
        if (start <= 0) {
            throw new IllegalArgumentException(
                    "Parameter \"position\" must be greater than zero.");
        }
        this.root = index.getParent();
        this.index_path = index.toPath();
        if (charset != null) {
            this.charset = charset;
        }
        this.start = start;
        this.end = end;
        this.pieces = end - start + 1;
    }

    /**
     * インデックスの現在の行の次に記載された、データファイルのReaderを取得する<br>
     * このメソッドが初めて実行された場合、インデックスのReaderの初期化処理をおこない、
     * 最初のデータファイルのReaderを返す<br>
     * インデックスの現在の行が最終行の場合、nullを返す<br>
     * 
     * @return インデックスの現在の行の次に記載された、データファイルのReader
     * @throws IOException ファイルのReader関連の処理で例外が発生した場合
     */
    LineNumberReader getNextReader() throws IOException {
        if (br_index == null || lr_index == null) {
            initIndexReaders();
        }
        if (lr_data != null) {
            lr_data.close();
        }
        if (br_data != null) {
            br_data.close();
        }
        String next = null;
        do {
            next = lr_index.readLine();
            if ((next == null) || (end > 0 && lr_index.getLineNumber() > end)) {
                closeAll();
                return null;
            }
        // ファイルが見つかるまで繰り返し
        } while (!(new File(root + "/" + next)).isFile());

        updateProgress(next);
        br_data = Files.newBufferedReader(
                Paths.get(root + "/" + next), charset);
        lr_data = new LineNumberReader(br_data);
        return lr_data;
    }

    /**
     * 現在のReaderが処理する作品の著者
     * 
     * @return 現在のReaderが処理する作品の著者
     */
    String getAuthor() {
        return author;
    }

    /**
     * 現在のReaderが処理する作品の作品名（ファイル名）
     * 
     * @return 現在のReaderが処理する作品の作品名
     */
    String getPiece() {
        return piece;
    }

    Progress getProgress() {
        return new Progress(
                Progress.Status.IN_PROGRESS, author, piece, pieces, processed);
    }

    /**
     * インデックスとデータファイルのReaderを全てクローズする
     * 
     * @throws IOException Readerのクローズ処理の例外
     */
    void closeAll() throws IOException {
        for (Closeable reader : readers) {
           if (reader != null) {
               reader.close();
           }
        }
    }

    private void initIndexReaders() throws IOException {
        br_index = Files.newBufferedReader(index_path, charset);
        lr_index = new LineNumberReader(br_index); 
        while (lr_index.getLineNumber() < start - 1) {
            lr_index.readLine();
        }
    }

    private void updateProgress(String dataPath) {
        String[] path = dataPath.split("/");
        author = path[0];
        piece = path[1];
        processed = lr_index.getLineNumber();
    }

}