package jp.gr.java_conf.hhayakawa_jp.linguistics;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang.RandomStringUtils;

public class ListenerLogicRegister {

    private static ListenerLogicRegister instance = null;

    private Map<String, ListenerLogic> register =
            new HashMap<String, ListenerLogic>();

    // uninstanciable
    private ListenerLogicRegister() {
    }

    public static ListenerLogicRegister getInstance() {
        if (instance == null) {
            instance = new ListenerLogicRegister();
        }
        return instance;
    }

    public String register(ListenerLogic listener) {
        String key = null;
        do {
            key = RandomStringUtils.randomAlphanumeric(16);
        } while (register.keySet().contains(key));
        register.put(key, listener);
        return key;
    }

    public ListenerLogic get(String key) {
        return register.get(key);
    }

}