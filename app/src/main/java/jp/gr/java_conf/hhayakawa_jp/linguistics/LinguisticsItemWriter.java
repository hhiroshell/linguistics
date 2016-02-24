package jp.gr.java_conf.hhayakawa_jp.linguistics;

import java.io.Serializable;
import java.util.List;
import java.util.Set;

import javax.batch.api.chunk.ItemWriter;
import javax.enterprise.context.Dependent;
import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 * ItemWriterの実装
 * 
 * @author hiroshi.hayakawa@oracle.com
 *
 */
@Dependent
@Named("LinguisticsItemWriter")
public class LinguisticsItemWriter implements ItemWriter {

    /**
     * DB接続はJPAを利用
     */
    @PersistenceContext(unitName = Constants.PERSISTENCE_UNIT_NAME)
    private EntityManager em;
    /**
     * デフォルトコンストラクタ。jBatchでは、引数無しでPublicのコンストラクタが必要。
     */
    public LinguisticsItemWriter() {}

    /* (nom-Javadoc)
     * @see javax.batch.api.chunk.ItemWriter#checkpointInfo()
     */
    @Override
    public Serializable checkpointInfo() throws Exception {
        return null;
    }

    /* (non-Javadoc)
     * @see javax.batch.api.chunk.ItemWriter#close()
     */
    @Override
    public void close() throws Exception {
        // コンテナ管理のトランザクションとなるので、ここではEntityManagerをクローズできない
//        em.close();
    }

    /* (non-Javadoc)
     * @see javax.batch.api.chunk.ItemWriter#open(java.io.Serializable)
     */
    @Override
    public void open(Serializable arg0) throws Exception {
        // do nothing.
    }

    /* (non-Javadoc)
     * @see javax.batch.api.chunk.ItemWriter#writeItems(java.util.List)
     */
    @Override
    public void writeItems(List<Object> allItems) throws Exception {
        for (Object items : allItems) {
            if (!(items instanceof Set<?>)) {
                // TODO 例外を投げて停止。本来ならログを書くところ
            }
            Set<?> oneLineItems = (Set<?>)items;
            for (Object item : oneLineItems) {
                em.persist(item);
            }
        }
    }

}
