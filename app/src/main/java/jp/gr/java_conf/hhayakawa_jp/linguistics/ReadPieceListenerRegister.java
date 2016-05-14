package jp.gr.java_conf.hhayakawa_jp.linguistics;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang.RandomStringUtils;

public class ReadPieceListenerRegister {

    private static ReadPieceListenerRegister instance = null;

    private Map<String, ReadPieceListener> register =
            new HashMap<String, ReadPieceListener>();

    // uninstanciable
    private ReadPieceListenerRegister() {
    }

    public static ReadPieceListenerRegister getInstance() {
        if (instance == null) {
            instance = new ReadPieceListenerRegister();
        }
        return instance;
    }

    public String register(ReadPieceListener listener) {
        String key = null;
        do {
            key = RandomStringUtils.randomAlphanumeric(16);
        } while (register.keySet().contains(key));
        register.put(key, listener);
        return key;
    }

    public ReadPieceListener get(String key) {
        return register.get(key);
    }

}