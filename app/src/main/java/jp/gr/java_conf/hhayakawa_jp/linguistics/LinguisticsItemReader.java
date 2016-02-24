package jp.gr.java_conf.hhayakawa_jp.linguistics;

import java.io.File;
import java.io.IOException;
import java.io.LineNumberReader;
import java.io.Serializable;
import java.nio.charset.Charset;
import java.util.Properties;

import javax.batch.api.BatchProperty;
import javax.batch.api.chunk.ItemReader;
import javax.batch.runtime.context.JobContext;
import javax.enterprise.context.Dependent;
import javax.inject.Inject;
import javax.inject.Named;

import jp.gr.java_conf.hhayakawa_jp.linguistics.Constants;
import jp.gr.java_conf.hhayakawa_jp.linguistics.model.LineId;

/**
 * ItemReaderの実装
 * 
 * @author hiroshi.hayakawa@oracle.com
 *
 */
@Dependent
@Named("LinguisticsItemReader")
public class LinguisticsItemReader implements ItemReader {

    /**
     * jBatchのジョブコンテキスト
     */
    @Inject
    JobContext jobCtx;
    /**
     * indexProcessorはReaderインスタンスごとに作成
     */
    private IndexProcessor indexProcessor = null;
    /**
     * 現在の分析対象のファイルのReader
     */
    private LineNumberReader reader = null;
    /**
     * バッチプロパテイ。partition毎に異なる値が取得できる
     * indexの読み込みの開始行
     */
    @Inject
    @BatchProperty(name = Constants.PartitionProperty.PROPKEY_INDEX_START)
    private String start_string;
    /**
     * indexの読み込みの開始行のint値
     */
    private int start;
    /**
     * バッチプロパテイ。partition毎に異なる値が取得できる
     * indexの読み込みの終了行
     */
    @Inject
    @BatchProperty(name = Constants.PartitionProperty.PROPKEY_INDEX_END)
    private String end_string;
    /**
     * indexの読み込みの終了行のint値
     */
    private int end;
    /**
     * バッチプロパテイ。partition毎に異なる値が取得できる
     * partitionの識別番号
     */
    @Inject
    @BatchProperty(name = Constants.PartitionProperty.PROPKEY_PARTITION_ID)
    private String partition_id;
    /**
     * デフォルトコンストラクタ
     */
//    public LinguisticsItemReader() {}

    /* (non-Javadoc)
     * @see javax.batch.api.chunk.ItemReader#checkpointInfo()
     */
    @Override
    public Serializable checkpointInfo() throws Exception {
        return null;
    }

    /* (non-Javadoc)
     * @see javax.batch.api.chunk.ItemReader#close()
     */
    @Override
    public void close() throws Exception {
        if (indexProcessor != null) {
            indexProcessor.closeAll();
        }
    }

    /* (non-Javadoc)
     * @see javax.batch.api.chunk.ItemReader#open(java.io.Serializable)
     */
    @Override
    public void open(Serializable arg0) throws Exception {
        this.start = Integer.valueOf(start_string);
        this.end = Integer.valueOf(end_string);
        Properties job_properties = jobCtx.getProperties();
        if (job_properties == null) {
            throw new IllegalStateException("failed to load job properties.");
        }
        Charset charset = Charset.forName(job_properties.getProperty(
                Constants.JobProperty.PROPKEY_CHARSET));
        File index = new File(job_properties.getProperty(
                Constants.JobProperty.PROPKEY_INDEX_FILE));
        try {
            indexProcessor = IndexProcessor.getIndexProcessor(
                    index, charset, start, end);
            reader = indexProcessor.getNextReader();
        } catch (IOException e) {
            try {
                if (indexProcessor != null) {
                    indexProcessor.closeAll();
                }
            } catch (IOException e2) {
            }
            throw e;
        }
    }

    /* (non-Javadoc)
     * @see javax.batch.api.chunk.ItemReader#readItem()
     */
    @Override
    public Object readItem() throws Exception {
        String lineString = reader.readLine();
        if (lineString == null) {
            System.out.println("finished(partition: " + partition_id + " | "
                    + "piece: " + "\"" + indexProcessor.getAuthor() + "/"
                    + indexProcessor.getPiece() + "\""+ ")");
            reader = indexProcessor.getNextReader();
            if (reader == null) {
                return null;
            }
            lineString = reader.readLine();
        }
        LineId lineId = new LineId(indexProcessor.getAuthor(),
                indexProcessor.getPiece(), reader.getLineNumber());
        return new Line(lineId, lineString);
    }

}
