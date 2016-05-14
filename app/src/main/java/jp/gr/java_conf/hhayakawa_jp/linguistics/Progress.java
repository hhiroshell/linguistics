package jp.gr.java_conf.hhayakawa_jp.linguistics;

/**
 * パーティションの処理の進捗状況を表現するオブジェクト
 * 
 * @author hhayakaw
 *
 */
public class Progress {

    private final Status status;
    private final String author;
    private final String piece;
    private final int pieces;
    private final int processed;

    /**
     * コンストラクタ
     * 
     * @param status
     * @param author
     * @param piece
     * @param pieces
     * @param processed
     */
    public Progress(Status status, String author, String piece, int pieces,
            int processed) {
        super();
        this.status = status;
        this.author = author;
        this.piece = piece;
        this.pieces = pieces;
        this.processed = processed;
    }

    public Status getStatus() {
        return status;
    }

    public String getAuthor() {
        return author;
    }

    public String getPiece() {
        return piece;
    }

    public int getPieces() {
        return pieces;
    }

    public int getProcessed() {
        return processed;
    }

    public enum Status {
        FINISHED("FINISHED"),
        IN_PROGRESS("IN_PROGRESS"),
        ;

        private final String text;

        private Status(final String text) {
            this.text = text;
        }

        public String asText() {
            return text;
        }
    }

}