package jp.gr.java_conf.hhayakawa_jp.linguistics.controller;

import javax.json.JsonObject;

public class JobParameter {
    private int partitions = 1;
    private int threads = 1;

    public static JobParameter createInstance(JsonObject json) {
        if (json == null) {
            // TODO Implement error handling
            throw new NullPointerException();
        }
        int partitions = json.getInt("partitions");
        if (partitions <= 0) {
            throw new IllegalArgumentException();
        }
        int threads = json.getInt("threads");
        if (threads <= 0) {
            throw new IllegalArgumentException();
        }
        JobParameter instance = new JobParameter();
        instance.setPartitions(partitions);
        instance.setThreads(threads);
        return instance;
    }

    public JobParameter() {
        super();
    }

    public int getPartitions() {
        return partitions;
    }

    public void setPartitions(int partitions) {
        this.partitions = partitions;
    }

    public int getThreads() {
        return threads;
    }

    public void setThreads(int threads) {
        this.threads = threads;
    }

}
