package jp.gr.java_conf.hhayakawa_jp.linguistics;

/**
 * 作品の読み込み開始／終了時に実行されるメソッドを定義したListener
 * 
 * @author hhayakaw
 *
 */
public interface ReadPieceListenerLogic extends ListenerLogic {

    void beforeRead(String partition_id, Progress progress)
            throws LinguisticsException;

    void afterRead(String partition_id, Progress progress)
            throws LinguisticsException;

}
