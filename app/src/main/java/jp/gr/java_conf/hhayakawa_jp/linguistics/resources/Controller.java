package jp.gr.java_conf.hhayakawa_jp.linguistics.resources;

import java.util.Properties;

import javax.annotation.Resource;
import javax.batch.operations.JobOperator;
import javax.batch.runtime.BatchRuntime;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.UserTransaction;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;

import jp.gr.java_conf.hhayakawa_jp.linguistics.Constants;
import jp.gr.java_conf.hhayakawa_jp.linguistics.Constants.ExecutionParameter;

/**
 * ジョブの起動等の制御を行うための、RESTfulサービス インターフェースを提供します
 *
 * @author hhayakaw
 */
@Path("/LinguisticsJobController")
public class Controller {

    @Resource
    private UserTransaction utx;

    @PersistenceContext(unitName = Constants.PERSISTENCE_UNIT_NAME)
    private EntityManager em;
    /**
     * バッチジョブのジョブID
     */
    private static final String JOB_ID = "linguistics-job";

    /**
     * デフォルト コンストラクター
     */
    public Controller() {}

    /**
     * ジョブを実行します
     *
     * @return ジョブを開始した旨のメッセージと、ジョブIDを含む文字列
     */
    @GET
    @Path("/Start")
    public String start(@QueryParam("p") int partitions,
            @QueryParam("t") int threads) {
        // TODO Bad Parameterレスポンスなど
        if (partitions <= 0) {
            partitions = 1;
        }
        if (threads <= 0) {
            threads = 1;
        }
        Properties exec_parameters = new Properties();
        exec_parameters.put(
                ExecutionParameter.PROPKEY_PARTITION_NUMBER, String.valueOf(partitions));
        exec_parameters.put(
                ExecutionParameter.PROPKEY_THREAD_NUMBER, String.valueOf(threads));
        JobOperator operator = BatchRuntime.getJobOperator();
        long id = operator.start(JOB_ID, exec_parameters);
        return "Started: " + id;
    }

    /**
     * ジョブの実行結果（DBに保存されたデータ）を削除して、再度実行できる状態にします
     * 
     * @return "ジョブの結果がクリアされた旨を示す文字列"
     */
    @DELETE
    @Path("/Clear")
    public String clear() {
        em.createNamedQuery("line.deleteAll");
        // TODO: トランザクションの扱いを正しく実装する
        return "cleared.";
    }

    /**
     * シンプルな文字列を返します<br>
     * アプリケーションが起動していることを確認するために利用することを想定しています。
     *
     * @return メソッドが正しく実行されたことを示す文字列
     */
    @GET
    @Path("/Ping")
    public String ping() {
        return "I'm working...";
    }

}
