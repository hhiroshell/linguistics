package jp.gr.java_conf.hhayakawa_jp.linguistics;

import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.Paths;
import java.util.Properties;

import javax.batch.api.partition.PartitionMapper;
import javax.batch.api.partition.PartitionPlan;
import javax.batch.api.partition.PartitionPlanImpl;
import javax.batch.operations.JobOperator;
import javax.batch.runtime.BatchRuntime;
import javax.batch.runtime.context.JobContext;
import javax.enterprise.context.Dependent;
import javax.inject.Inject;
import javax.inject.Named;

import jp.gr.java_conf.hhayakawa_jp.linguistics.Constants;

/**
 * @author hhayakaw
 *
 */
@Dependent
@Named("LinguisticsPartitionMapper")
public class LinguisticsPartitionMapper implements PartitionMapper {

    /**
     * jBatchのジョブコンテキスト
     */
    @Inject
    JobContext jobCtx;

    /* (non-Javadoc)
     * @see javax.batch.api.partition.PartitionMapper#mapPartitions()
     */
    @Override
    public PartitionPlan mapPartitions() throws Exception {
        return new PartitionPlanImpl() {

            /* (non-Javadoc)
             * @see javax.batch.api.partition.PartitionPlanImpl#getPartitions()
             */
            @Override
            public int getPartitions() {
                JobOperator operator = BatchRuntime.getJobOperator();
                Properties exec_parameters =
                        operator.getParameters(jobCtx.getExecutionId());
                String partitions = exec_parameters.getProperty(
                        Constants.ExecutionParameter.PROPKEY_PARTITION_NUMBER, "1");
                return Integer.parseInt(partitions);
            }

            /* (non-Javadoc)
             * @see javax.batch.api.partition.PartitionPlanImpl#getThreads()
             */
            @Override
            public int getThreads() {
                JobOperator operator = BatchRuntime.getJobOperator();
                Properties exec_parameters =
                        operator.getParameters(jobCtx.getExecutionId());
                String threads = exec_parameters.getProperty(
                        Constants.ExecutionParameter.PROPKEY_THREAD_NUMBER, "1");
                return Integer.parseInt(threads);
            }

            /* (non-Javadoc)
             * @see javax.batch.api.partition.PartitionPlanImpl#getPartitionProperties()
             */
            @Override
            public Properties[] getPartitionProperties() {
                Properties job_props = jobCtx.getProperties();
                if (job_props == null) {
                    throw new IllegalStateException(
                            "failed to load job properties.");
                }
                String charset = job_props.getProperty(
                        Constants.JobProperty.PROPKEY_CHARSET);
                String index_path = job_props.getProperty(
                        Constants.JobProperty.PROPKEY_INDEX_FILE);
                int index_lines = 0;
                try {
                    index_lines = Utils.countLineNumber(
                            Paths.get(index_path), Charset.forName(charset));
                } catch (IOException e) {
                    throw new IllegalStateException(
                            "failed to read index file.", e);
                }

                int partition_number = getPartitions();
                int partition_length = index_lines / partition_number;
                if (index_lines % partition_number != 0) {
                    partition_length++;
                }
                Properties[] partition_props = new Properties[partition_number];
                for (int i = 0; i < partition_number; i++) {
                    int start = partition_length * i + 1;
                    int end = partition_length * (i + 1);
                    Properties p = new Properties();
                    p.put(Constants.PartitionProperty.PROPKEY_INDEX_START,
                            String.valueOf(start));
                    p.put(Constants.PartitionProperty.PROPKEY_INDEX_END,
                            String.valueOf(end));
                    p.put(Constants.PartitionProperty.PROPKEY_PARTITION_ID,
                            String.valueOf(i));
                    partition_props[i] = p;
                }
                return partition_props;
            }
        };
    }

}
