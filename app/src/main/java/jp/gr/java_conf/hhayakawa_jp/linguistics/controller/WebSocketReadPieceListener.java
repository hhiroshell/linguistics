package jp.gr.java_conf.hhayakawa_jp.linguistics.controller;

import java.io.IOException;

import javax.json.Json;
import javax.json.JsonObject;
import javax.websocket.EncodeException;
import javax.websocket.Session;

import jp.gr.java_conf.hhayakawa_jp.linguistics.LinguisticsException;
import jp.gr.java_conf.hhayakawa_jp.linguistics.Progress;
import jp.gr.java_conf.hhayakawa_jp.linguistics.ReadPieceListener;

public class WebSocketReadPieceListener implements ReadPieceListener {

    private final Session session;

    WebSocketReadPieceListener(Session session) {
        this.session = session;
    }

    @Override
    public void beforeRead(String partition_id, Progress progress)
            throws LinguisticsException {
        try {
            JsonObject json =
                    createPartitionProgressJson(partition_id, progress);
            session.getBasicRemote().sendObject(json);
        } catch (IOException | EncodeException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            throw new LinguisticsException(e);
        }
    }

    @Override
    public void afterRead(String partition_id, Progress progress)
            throws LinguisticsException {
        // do nothing.
    }

    private static JsonObject createPartitionProgressJson(
            String partition_id, Progress progress) {
        if (partition_id == null || partition_id.length() == 0
                || progress == null) {
            // TODO Implement error handling
            throw new NullPointerException();
        }
        JsonObject json = Json.createObjectBuilder()
                .add("patition_id", partition_id)
                .add("status", progress.getStatus().asText())
                .add("author", progress.getAuthor())
                .add("piece", progress.getPiece())
                .add("pieces", progress.getPieces())
                .add("processed", progress.getProcessed())
                .build();
        return json;
    }
}
