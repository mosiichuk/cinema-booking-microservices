#!/bin/sh

cd theaters-service; echo "\033[1;96m Execution directory: `pwd | xargs basename` \033[0m"; ./gradlew clean build; docker build . -t kuroiumi/theaters-service; cd ..
cd movies-service; echo "\033[1;96m Execution directory: `pwd | xargs basename` \033[0m"; ./gradlew clean build; docker build . -t kuroiumi/movies-service; cd ..
