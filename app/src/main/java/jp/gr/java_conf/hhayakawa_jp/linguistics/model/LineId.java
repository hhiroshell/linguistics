package jp.gr.java_conf.hhayakawa_jp.linguistics.model;

import java.io.Serializable;

import javax.persistence.Embeddable;

@Embeddable
public class LineId implements Serializable {

    private static final long serialVersionUID = 5679055255802355261L;

    private String author;

    private String piece;

    private int lineNumber;
    
    public LineId() {
    }

    public LineId(String author, String piece, int lineNumber) {
        super();
        this.author = author;
        this.piece = piece;
        this.lineNumber = lineNumber;
    }

    public String getAuthor() {
        return author;
    }

    public String getPiece() {
        return piece;
    }

    public int getLineNumber() {
        return lineNumber;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((author == null) ? 0 : author.hashCode());
        result = prime * result + lineNumber;
        result = prime * result + ((piece == null) ? 0 : piece.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        LineId other = (LineId) obj;
        if (author == null) {
            if (other.author != null)
                return false;
        } else if (!author.equals(other.author))
            return false;
        if (lineNumber != other.lineNumber)
            return false;
        if (piece == null) {
            if (other.piece != null)
                return false;
        } else if (!piece.equals(other.piece))
            return false;
        return true;
    }

}
