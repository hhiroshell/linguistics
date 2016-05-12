package jp.gr.java_conf.hhayakawa_jp.linguistics;

/**
 * 本アプリケーションで利用する定数を定義するクラス
 * 
 * @author hhayakaw
 *
 */
public final class Constants {
    /**
     * JPAのpersistence-unit名
     */
    public static final String PERSISTENCE_UNIT_NAME = "linguistics";

    /**
     * ジョブプロパティに関連する定数
     * 
     * @author hhayakaw
     *
     */
    final class JobProperty {
        /**
         * プロパティキー: インデックス、データファイル読み込み時のcharset
         */
        static final String PROPKEY_CHARSET = "charset";
        /**
         * プロパティキー: インデックスファイルのパス
         */
        static final String PROPKEY_INDEX_FILE = "index";
        
    }

    /**
     * パーティション毎に異なるプロパティに関連する定数
     * 
     * @author hhayakaw
     *
     */
    final class PartitionProperty {
        /**
         * プロパティキー: インデックスの読み込みを開始する行
         */
        static final String PROPKEY_INDEX_START = "index.start";
        /**
         * プロパティキー: インデックスの読み込みを終了する行
         */
        static final String PROPKEY_INDEX_END = "index.end";
        /**
         * プロパティキー: パーティションに振られたID番号
         */
        static final String PROPKEY_PARTITION_ID = "id";
        
    }

    /**
     * ジョブ実行時に指定されたパラメータで決まるプロパティに関連する定数
     * 
     * @author hhayakaw
     *
     */
    public final class ExecutionParameter {
        /**
         * プロパティキー： パーティション数
         */
        public static final String PROPKEY_PARTITION_NUMBER = "partitions";
        /**
         * プロパティキー: スレッド数
         */
        public static final String PROPKEY_THREAD_NUMBER = "threads";
        
    }
}
