package jp.gr.java_conf.hhayakawa_jp.linguistics;

import java.util.Properties;

import javax.batch.api.listener.JobListener;
import javax.batch.operations.JobOperator;
import javax.batch.runtime.BatchRuntime;
import javax.batch.runtime.context.JobContext;
import javax.enterprise.context.Dependent;
import javax.inject.Inject;
import javax.inject.Named;

@Dependent
@Named("LinguisticsJobListener")
public class LinguisticsJobListener implements JobListener {

    /**
     * jBatchのジョブコンテキスト
     */
    @Inject
    JobContext jobCtx;
    
    JobListenerLogic jobListenerLogic = null;

    @Override
    public void beforeJob() throws Exception {
        initListener();
        if (jobListenerLogic != null) {
            jobListenerLogic.beforeJob();
        }
    }

    @Override
    public void afterJob() throws Exception {
        if (jobListenerLogic != null) {
            jobListenerLogic.afterJob();
        }
    }

    /**
     * このジョブに適用するJobListerLogicをキャッシュします。
     */
    private void initListener() {
        JobOperator operator = BatchRuntime.getJobOperator();
        Properties exec_parameters =
                operator.getParameters(jobCtx.getExecutionId());
        String key = exec_parameters.getProperty(
                Constants.ExecutionParameter.PROPKEY_JOB_LISTENER_LOGIC_KEY);
        if (key != null && key.length() > 0) {
            ListenerLogic logic = ListenerLogicRegister.getInstance().get(key);
            if (logic instanceof JobListenerLogic) {
                jobListenerLogic = (JobListenerLogic)logic;
            }
        }
    }

}