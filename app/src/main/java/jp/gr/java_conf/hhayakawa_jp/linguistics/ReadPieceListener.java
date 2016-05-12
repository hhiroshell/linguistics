package jp.gr.java_conf.hhayakawa_jp.linguistics;

public interface ReadPieceListener {

    void beforeRead(String partition_id, Progress progress)
            throws LinguisticsException;

    void afterRead(String partition_id, Progress progress)
            throws LinguisticsException;

}
