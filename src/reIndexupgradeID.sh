#!/bin/bash


if [ ! -e $1 ] ; then
  echo "file not exist." >&2
  exit 1
fi

filename=$1
id=0

while IFS="\n" read line
do
  if [[ $(echo $line | cut -d: -f1) = "id" ]] ; then
    echo $line | sed -e "s/id: [[:digit:]]*,/id: ${id},/g"
    id=$(($id + 1))
  else
    echo $line
  fi
done < $filename



exit 0

