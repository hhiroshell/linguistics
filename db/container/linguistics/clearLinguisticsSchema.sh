#!/bin/sh

export ORACLE_HOME=/u01/app/oracle/product/11.2.0/xe
export PATH=$ORACLE_HOME/bin:$PATH
export ORACLE_SID=XE

# ----------------
${ORACLE_HOME}/bin/sqlplus linguistics/linguistics @/tmp/linguistics/dropLinguisticsTables.sql

# ----------------
${ORACLE_HOME}/bin/sqlplus linguistics/linguistics @/tmp/linguistics/createLinguisticsTables.sql
