package jp.gr.java_conf.hhayakawa_jp.linguistics.controller;

import java.io.IOException;

import javax.json.Json;
import javax.json.JsonObject;
import javax.websocket.EncodeException;
import javax.websocket.Session;

import jp.gr.java_conf.hhayakawa_jp.linguistics.JobListenerLogic;
import jp.gr.java_conf.hhayakawa_jp.linguistics.LinguisticsException;

public class WebSocketJobListenerLogic implements JobListenerLogic {

    private final Session session;
    
    private long start;

    WebSocketJobListenerLogic(Session session) {
        this.session = session;
    }

    @Override
    public void beforeJob() throws LinguisticsException {
        start = System.currentTimeMillis();
    }

    @Override
    public void afterJob() throws LinguisticsException {
        long elapsed = System.currentTimeMillis() - start;
        JsonObject json = createResultJson(elapsed);
        try {
            session.getBasicRemote().sendObject(json);
        } catch (IOException | EncodeException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            throw new LinguisticsException(e);
        }
    }

    private static JsonObject createResultJson(long elapsed) {
        JsonObject json = Json.createObjectBuilder()
                .add("elapsed", elapsed)
                .build();
        return json;
    }

}
