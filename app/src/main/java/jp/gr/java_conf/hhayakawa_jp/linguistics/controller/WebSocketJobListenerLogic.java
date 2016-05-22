package jp.gr.java_conf.hhayakawa_jp.linguistics.controller;

import java.io.IOException;
import java.util.Properties;

import javax.batch.operations.JobOperator;
import javax.batch.runtime.BatchRuntime;
import javax.batch.runtime.context.JobContext;
import javax.json.Json;
import javax.json.JsonObject;
import javax.websocket.EncodeException;
import javax.websocket.Session;

import jp.gr.java_conf.hhayakawa_jp.linguistics.Constants;
import jp.gr.java_conf.hhayakawa_jp.linguistics.JobListenerLogic;
import jp.gr.java_conf.hhayakawa_jp.linguistics.LinguisticsException;

public class WebSocketJobListenerLogic implements JobListenerLogic {

    private final Session session;
    
    private long start;

    WebSocketJobListenerLogic(Session session) {
        this.session = session;
    }

    @Override
    public void beforeJob(JobContext jobCtx) throws LinguisticsException {
        start = System.currentTimeMillis();
    }

    @Override
    public void afterJob(JobContext jobCtx) throws LinguisticsException {
        long elapsed = System.currentTimeMillis() - start;
        JobOperator operator = BatchRuntime.getJobOperator();
        Properties exec_parameters =
                operator.getParameters(jobCtx.getExecutionId());
        String partitions = exec_parameters.getProperty(
                Constants.ExecutionParameter.PROPKEY_PARTITION_NUMBER, "0");
        String threads = exec_parameters.getProperty(
                Constants.ExecutionParameter.PROPKEY_THREAD_NUMBER, "0");

        JsonObject json = Json.createObjectBuilder()
                .add("type", "result")
                .add("elapsed", elapsed)
                .add("jobid", jobCtx.getExecutionId())
                .add("partitions", Integer.parseInt(partitions))
                .add("threads", Integer.parseInt(threads))
                .build();
        try {
            session.getBasicRemote().sendObject(json);
        } catch (IOException | EncodeException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            throw new LinguisticsException(e);
        }
    }

}
