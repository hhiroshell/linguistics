package jp.gr.java_conf.hhayakawa_jp.linguistics;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.batch.api.chunk.ItemProcessor;
import javax.enterprise.context.Dependent;
import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.atilika.kuromoji.ipadic.Token;
import com.atilika.kuromoji.ipadic.Tokenizer;

import jp.gr.java_conf.hhayakawa_jp.linguistics.model.LineEntity;
import jp.gr.java_conf.hhayakawa_jp.linguistics.model.WordEntity;

/**
 * ItemProcessorの実装。文字列に形態素解析をかけて、LineEntityを作成します。
 *
 * @author hhayakaw
 *
 */
@Dependent
@Named("LinguisticsItemProcessor")
public class LinguisticsItemProcessor implements ItemProcessor {

    /**
     * 形態素解析器
     */
    private static Tokenizer tokenizer = new Tokenizer();
    /**
     * DB接続はJPAを利用
     */
    @PersistenceContext(unitName = Constants.PERSISTENCE_UNIT_NAME)
    private EntityManager em;
    /**
     * デフォルトコンストラクタ。jBatchでは、引数なしでpublicのコンストラクタが必要
     */
    public LinguisticsItemProcessor() {}

    /* (non-Javadoc)
     * @see javax.batch.api.chunk.ItemProcessor#processItem(java.lang.Object)
     */
    @Override
    public Object processItem(Object item) throws Exception {
        if (!(item instanceof Line)) {
            throw new IllegalStateException(
                    "Type of item object does not match.");
        }
        Line line = (Line)item;

        Set<Object> result = new HashSet<Object>();
        List<Integer> wordIds = new ArrayList<Integer>();
        for (Token token : tokenizer.tokenize(line.getLineString())) {
            WordEntity word = new WordEntity(token);
            Integer wordId = word.getWordId();
            if (wordId != 0) {
                wordIds.add(wordId);
                /*
                 *  このバージョンでは、辞書データはDBに格納しない
                 *  例外処理の研究ができた暁には、この実装を採用することを検討する
                 */
//                if (em.find(WordEntity.class, wordId) == null) {
//                    result.add(word);
//                }
            }
        }
        result.add(new LineEntity(line.getLineId(), wordIds));
        return result;
    }

}
