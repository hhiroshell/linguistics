package jp.gr.java_conf.hhayakawa_jp.linguistics;

import java.io.BufferedReader;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;

/**
 * サンプルアプリケーション用のユーティリティメソッドを集めたクラス
 *
 * @author hhayakaw
 *
 */
public final class Utils {

    /**
     * indexの行数をカウントする目的で作成したユーティリティ。
     * 本来であればIndexProcessorクラスから取得できるのが自然だが、ItemReaer#Open()で
     * IndexProcessorをインスタンス化するのに先行してindexの行数が必要になるため、
     * 本ユーティリティに出した。
     * 
     * @param path
     * @param charset
     * @return
     * @throws IOException
     */
    static int countLineNumber(Path path, Charset charset) throws IOException {
        BufferedReader br = Files.newBufferedReader(path, charset);
        int l_number = 0;
        while (br.readLine() != null) {
            l_number++;
        }
        br.close();
        return l_number;
    }

    /**
     * このメソッドを実行した箇所のクラス名、メソッド名、行番号を標準出力に出力します。
     * 文字列のフォーマットは以下のとおりです。
     *
     * ${クラス名]#${メソッド名}(${行番号})
     */
    public static void printCodeLocation() {
        StackTraceElement throwableStackTraceElement =
                new Throwable().getStackTrace()[1];
        System.out.println(throwableStackTraceElement.getClassName()
                + "#" + throwableStackTraceElement.getMethodName()
                + ": " + throwableStackTraceElement.getLineNumber());
    }

}
