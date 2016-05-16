package jp.gr.java_conf.hhayakawa_jp.linguistics.controller;

import java.util.Properties;

import javax.batch.operations.JobOperator;
import javax.batch.runtime.BatchRuntime;
import javax.json.JsonObject;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

import jp.gr.java_conf.hhayakawa_jp.linguistics.Constants;
import jp.gr.java_conf.hhayakawa_jp.linguistics.Constants.ExecutionParameter;
import jp.gr.java_conf.hhayakawa_jp.linguistics.ReadPieceListenerLogic;
import jp.gr.java_conf.hhayakawa_jp.linguistics.ListenerLogicRegister;

/**
 * ジョブの起動等の制御を行うための、WebSocketのインターフェースを提供します
 *
 * @author hhayakaw
 */
@ServerEndpoint(value = "/websocket",
                decoders = JsonDecoder.class,
                encoders = JsonEncoder.class)
public class WebSocketContoller {

    @OnOpen
    public void open() {
        // TODO Implement this method
        System.out.println("socket opened.");
    }

    @OnClose
    public void close() {
        // TODO Implement this method
        System.out.println("socket closed.");
    }

    @OnError
    public void error(Throwable t) {
        // TODO Implement this method
        t.printStackTrace();
    }

    /**
     * ジョブを開始します。<br>
     * パラメータとして、パーティション数、スレッド数を設定したJsonObjectと、
     * WebSocketのSessionオブジェクトを受け取ります。
     * 
     * @param json パーティション数、スレッド数を設定したJsonObject
     * @param session WebSocketのSessionオブジェクト
     * 
     */
    @OnMessage
    public void startJob(JsonObject json, Session session) {
        if (json == null) {
            // TODO: ここでnullになる前にdecodeでエラーにすべきかも
            throw new NullPointerException();
        }
        int partitions = json.getInt("partitions", 1);
        if (partitions <= 0) {
            throw new IllegalArgumentException();
        }
        int threads = json.getInt("threads", 1);
        if (threads <= 0) {
            throw new IllegalArgumentException();
        }
        System.out.println("Job Parameter "
                + "[partitions=" + partitions + ", threads=" + threads + "]");

        Properties exec_parameters = new Properties();
        exec_parameters.put(ExecutionParameter.PROPKEY_PARTITION_NUMBER,
                String.valueOf(partitions));
        exec_parameters.put(ExecutionParameter.PROPKEY_THREAD_NUMBER,
                String.valueOf(threads));

        ReadPieceListenerLogic listener =
                new WebSocketReadPieceListenerLogic(session);
        String key = ListenerLogicRegister.getInstance().register(listener);
        exec_parameters.put(
                ExecutionParameter.PROPKEY_READ_PIECE_LISTENER_KEY,
                key);

        JobOperator operator = BatchRuntime.getJobOperator();
        operator.start(Constants.JOB_ID, exec_parameters);
        System.out.println("started.");
    }

}