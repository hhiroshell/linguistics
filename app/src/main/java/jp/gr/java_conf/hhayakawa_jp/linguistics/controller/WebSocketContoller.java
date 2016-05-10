package jp.gr.java_conf.hhayakawa_jp.linguistics.controller;

import java.io.IOException;

import javax.json.JsonObject;
import javax.websocket.EncodeException;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

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

    @OnMessage
    public void startJob(JsonObject json, Session session) throws IOException {
        if (json == null) {
            // TODO: ここでnullになる前にdecodeでエラーにすべきかも
            throw new NullPointerException();
        }
        JobParameter pamam = JobParameter.createInstance(json);
        // TODO start job.
    }

    // TODO このメソッドは適切なクラスに移行すべき
    public static void notifyStatus(Session session)
            throws IOException, EncodeException {
        JobStatus status = new JobStatus();
        JsonObject json = JobStatus.createJsonObject(status);
        session.getBasicRemote().sendObject(json);
    }

}
