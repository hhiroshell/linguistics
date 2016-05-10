package jp.gr.java_conf.hhayakawa_jp.linguistics.controller;

import java.io.IOException;
import java.io.Writer;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonWriter;
import javax.websocket.EncodeException;
import javax.websocket.Encoder;
import javax.websocket.EndpointConfig;

public class JsonEncoder implements Encoder.TextStream<JsonObject> {

    public JsonEncoder() {
        super();
    }

    @Override
    public void encode(JsonObject payload, Writer writer)
            throws EncodeException, IOException {
        if (payload == null || writer == null) {
            // TODO implement erro handling.
            throw new NullPointerException();
        }
        JsonWriter jsonWriter = Json.createWriter(writer);
        jsonWriter.writeObject(payload);
    }

    @Override
    public void init(EndpointConfig endpointConfig) {
        // TODO Implement this method
    }

    @Override
    public void destroy() {
        // TODO Implement this method
    }

}
