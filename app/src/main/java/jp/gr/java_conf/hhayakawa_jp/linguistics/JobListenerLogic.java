package jp.gr.java_conf.hhayakawa_jp.linguistics;

import javax.batch.runtime.context.JobContext;

public interface JobListenerLogic extends ListenerLogic {

    public void beforeJob(JobContext jobCtx) throws LinguisticsException;

    public void afterJob(JobContext jobCtx) throws LinguisticsException;

}
