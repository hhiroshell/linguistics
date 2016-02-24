#!/bin/sh
#
# jBatchのJobRepositoryを作成します
#
# @author: hhayakawa_jp <charley-horse@outlook.com>
#

export ORACLE_HOME=/u01/app/oracle/product/11.2.0/xe
export PATH=$ORACLE_HOME/bin:$PATH
export ORACLE_SID=XE

# Oracle XE の起動
# ----------------
/usr/sbin/startup.sh

# JobRepositoryの作成
# ----------------
${ORACLE_HOME}/bin/sqlplus system/oracle @/tmp/jbatch/createJobRepository.sql "$1" "$2"
