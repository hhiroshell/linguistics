package jp.gr.java_conf.hhayakawa_jp.linguistics.model;

import java.io.Serializable;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.atilika.kuromoji.ipadic.Token;

/**
 * 辞書データをDBに登録することを想定して作成したEntity
 * このバージョンでは、辞書データの登録はしておらず、wordIdの取得機能だけを利用しています
 * 
 * wordIdの取得のために、kuromojiライブラリのtoken#toString()結果をパースしています。
 * しかし、一般的にはtoString()の結果に依存するコードを書くべきではないと思いますので、コードを
 * 参考にする場合には注意して下さい。
 * 
 * @author hhayakaw
 *
 */
@Entity
@Table(name = "word")
public class WordEntity implements Serializable {

    /**
     * シリアルバージョンUID
     */
    private static final long serialVersionUID = 1740175419583215291L;

    private static final Pattern p = Pattern.compile("(.+)(wordId=)(\\d+)(}$)");
    
    @Id
    private Integer wordId;

    private String baseFrom;

    private String surfaceForm;

    private String partOfSpeech1;

    private String partOfSpeech2;

    private String reading;

    public WordEntity() {
    }

    public WordEntity(Integer wordId, String baseFrom, String surfaceForm,
            String partOfSpeech1, String partOfSpeech2, String reading) {
        this.wordId = wordId;
        this.baseFrom = baseFrom;
        this.surfaceForm = surfaceForm;
        this.partOfSpeech1 = partOfSpeech1;
        this.partOfSpeech2 = partOfSpeech2;
        this.reading = reading;
    }

    public WordEntity(Token token) {
        this.wordId = getWordId(token);
        this.baseFrom = token.getBaseForm();
        this.surfaceForm = token.getSurface();
        this.partOfSpeech1 = token.getPartOfSpeechLevel1();
        this.partOfSpeech2 = token.getPartOfSpeechLevel2();
        this.reading = token.getReading();
    }

    public Integer getWordId() {
        return wordId;
    }

    public String getBaseFrom() {
        return baseFrom;
    }

    public String getSurfaceForm() {
        return surfaceForm;
    }

    public String getPartOfSpeech1() {
        return partOfSpeech1;
    }

    public String getPartOfSpeech2() {
        return partOfSpeech2;
    }

    public String getReading() {
        return reading;
    }

    static private Integer getWordId(Token token) {
        Matcher m = p.matcher(token.toString());
        if (!m.find()) {
            return -1;
        }
        return Integer.valueOf(m.group(m.groupCount() - 1));
    }
}
