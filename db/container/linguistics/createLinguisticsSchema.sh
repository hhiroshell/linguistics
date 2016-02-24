#!/bin/bash

export ORACLE_HOME=/u01/app/oracle/product/11.2.0/xe
export PATH=$ORACLE_HOME/bin:$PATH
export ORACLE_SID=XE

# Oracle XE の起動
# ----------------
/usr/sbin/startup.sh

# Linuisticsバッチアプリケーション用のユーザーの作成
# ----------------
${ORACLE_HOME}/bin/sqlplus system/oracle @/tmp/linguistics/createLinguisticsUser.sql "$1" "$2"

# ----------------
${ORACLE_HOME}/bin/sqlplus linguistics/linguistics @/tmp/linguistics/createLinguisticsTables.sql

