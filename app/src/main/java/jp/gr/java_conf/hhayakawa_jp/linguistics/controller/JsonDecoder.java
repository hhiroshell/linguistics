package jp.gr.java_conf.hhayakawa_jp.linguistics.controller;

import java.io.StringReader;

import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonReader;
import javax.websocket.DecodeException;
import javax.websocket.Decoder;
import javax.websocket.EndpointConfig;

public class JsonDecoder implements Decoder.Text<JsonObject> {

    public JsonDecoder() {
        super();
    }

    @Override
    public void destroy() {
        // TODO Auto-generated method stub
    }

    @Override
    public void init(EndpointConfig arg0) {
        // TODO Auto-generated method stub
    }

    @Override
    public JsonObject decode(String message) throws DecodeException {
        System.out.println("message: " + message);
        if (message == null) {
            // TODO: ちゃんとしたエラーハンドリングを実装する
            throw new NullPointerException();
        }
        JsonReader reader = Json.createReader(new StringReader(message));
        return reader.readObject();
    }

    @Override
    public boolean willDecode(String message) {
        // TODO クライアントから来たメッセージをデコードしてよいか判定する
        return true;
    }

}
