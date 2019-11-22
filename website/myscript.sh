#!/bin/bash

for i in ~/Documents/parsons/fall-2019/designingWithML/programs/midterm/screenshots/*.jpg;
do convert $i -resize "64x64>" resized/"${i////_}";
done;
