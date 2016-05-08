package jp.gr.java_conf.hhayakawa_jp.linguistics.controller;

import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint(value = "/websocket")
public class WebSocketContoller {

    @OnOpen
    public void open() {
        System.out.println("socket opened.");
    }

    @OnClose
    public void close() {
        System.out.println("socket closed.");
    }

//    @OnError
//    public void error(Throwable t) {
//        // TODO implement
//    }
//
//    @OnMessage
//    public void startJob(Throwable t) {
//        System.out.println("job started.");
//    }

    public static void notifyClient() {
    }

}
