package jp.gr.java_conf.hhayakawa_jp.linguistics;

import java.io.Serializable;

import jp.gr.java_conf.hhayakawa_jp.linguistics.model.LineId;

/**
 * ひとつの行を表すオブジェクト。バッチアプリケーションのチェックポイントとしても利用。
 * 
 * @author hhayakaw
 *
 */
public class Line implements Serializable {

    /**
     * シリアルバージョンUID
     */
    private static final long serialVersionUID = 9140761108060709252L;
    /**
     * この行の識別子
     */
    private LineId lineId;
    /**
     * この行の文字列
     */
    private transient String lineString;

    /**
     * デフォルトコンストラクタ
     */
    public Line() {}
    
    /**
     * コンストラクタ
     * 
     * @param lineId
     * @param lineString
     */
    public Line(LineId lineId, String lineString) {
        this.lineId = lineId;
        this.lineString = lineString;
    }

    /**
     * この行の識別子オブジェクトを返す
     * 
     * @return この行の識別子オブジェクト
     */
    public LineId getLineId() {
        return lineId;
    }
    /**
     * この行の文字列を返す
     * 
     * @return
     */
    public String getLineString() {
        return lineString;
    }

}
