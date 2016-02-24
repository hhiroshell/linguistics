#!/bin/bash

#PIECE_ID=`echo 307_ruby_3042.zip | tr -d .zip`
#mkdir data/$PIECE_ID
#unzip -d data/$PIECE_ID 307_ruby_3042.zip
#FILENAME_ORG=`ls data/$PIECE_ID`
#echo data/$PIECE_ID/$PIECE_ID.txt | xargs mv data/$PIECE_ID/$FILENAME_ORG

mkdir data
for ARCHIVE in `ls *.zip`
do
    PIECE_ID=`echo $ARCHIVE | tr -d .zip`
    mkdir data/$PIECE_ID
    unzip -d data/$PIECE_ID $ARCHIVE
    FILENAME_ORG=`ls data/$PIECE_ID`
    echo data/$PIECE_ID/$PIECE_ID.txt | xargs mv data/$PIECE_ID/$FILENAME_ORG
done
