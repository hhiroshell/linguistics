package jp.gr.java_conf.hhayakawa_jp.linguistics;

public interface JobListenerLogic extends ListenerLogic {

    public void beforeJob() throws LinguisticsException;

    public void afterJob() throws LinguisticsException;

}
