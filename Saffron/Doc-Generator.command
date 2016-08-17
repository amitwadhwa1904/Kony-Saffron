#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
mkdir -p $DIR/doc;
FILES=$DIR/modules/*
for f in $FILES
do
filename=${f##*/}
 echo "Processing $filename file..."
 jsdoc2md $DIR/modules/$filename > $DIR/doc/${filename%.*}.md
done