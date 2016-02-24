package jp.gr.java_conf.hhayakawa_jp.linguistics.model;

import java.util.List;

import javax.persistence.CollectionTable;
import javax.persistence.ElementCollection;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Table;

@Entity
@Table(name = "line")
public class LineEntity {

    @EmbeddedId
    private LineId lineId;

    @ElementCollection(fetch = FetchType.LAZY)
    @CollectionTable(name = "line_words")
    private List<Integer> wordIds;

    private int numberOfWords;

    public LineEntity() {
    }

    public LineEntity(LineId lineId, List<Integer> wordIds, int numberOfWords) {
        this.lineId = lineId;
        this.wordIds = wordIds;
        this.numberOfWords = numberOfWords;
    }

    public LineEntity(LineId lineId, List<Integer> wordIds) {
        this.lineId = lineId;
        this.wordIds = wordIds;
        this.numberOfWords = wordIds.size();
    }    

    public LineId getLineId() {
        return lineId;
    }

    public List<Integer> getWordIds() {
        return wordIds;
    }

    public int getNumberOfWords() {
        return numberOfWords;
    }

}
