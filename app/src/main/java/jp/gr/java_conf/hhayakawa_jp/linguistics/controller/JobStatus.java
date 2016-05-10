package jp.gr.java_conf.hhayakawa_jp.linguistics.controller;

import javax.json.Json;
import javax.json.JsonObject;

public class JobStatus {

    private String status = Status.IN_PROGRESS.asText();
    private int total = 1;
    private int processed = 0;

    public JobStatus() {
        super();
    }

    public static JsonObject createJsonObject(JobStatus instance) {
        if (instance == null) {
            // TODO Implement error handling
            throw new NullPointerException();
        }
        JsonObject json = Json.createObjectBuilder()
                .add("status", instance.getStatus())
                .add("total", instance.getTotal())
                .add("processed", instance.getProcessed())
                .build();
        return json;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
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
