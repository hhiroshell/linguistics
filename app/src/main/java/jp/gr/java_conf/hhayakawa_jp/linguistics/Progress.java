package jp.gr.java_conf.hhayakawa_jp.linguistics;

import javax.json.Json;
import javax.json.JsonObject;

public class Progress {

    private Status status = Status.IN_PROGRESS;
    private String author = null;
    private String piece = null;
    private int pieces = 1;
    private int processed = 0;

    public Progress() {
        super();
    }

    public Progress(Status status, String author, String piece, int pieces,
            int processed) {
        super();
        this.status = status;
        this.author = author;
        this.piece = piece;
        this.pieces = pieces;
        this.processed = processed;
    }

    public static JsonObject createJsonObject(Progress instance) {
        if (instance == null) {
            // TODO Implement error handling
            throw new NullPointerException();
        }
        JsonObject json = Json.createObjectBuilder()
                .add("status", instance.getStatus().asText())
                .add("author", instance.getAuthor())
                .add("piece", instance.getPiece())
                .add("pieces", instance.getPieces())
                .add("processed", instance.getProcessed())
                .build();
        return json;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getPiece() {
        return piece;
    }

    public void setPiece(String piece) {
        this.piece = piece;
    }

    public int getPieces() {
        return pieces;
    }

    public void setPieces(int pieces) {
        this.pieces = pieces;
    }

    public int getProcessed() {
        return processed;
    }

    public void setProcessed(int processed) {
        this.processed = processed;
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