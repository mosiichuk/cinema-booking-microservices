#!/bin/sh

cd eureka-discovery; echo "\033[1;96m Execution directory: `pwd | xargs basename` \033[0m"; ./gradlew clean build; docker push kuroiumi/eureka-discovery; cd ..
cd api-gateway; echo "\033[1;96m Execution directory: `pwd | xargs basename` \033[0m"; ./gradlew clean build; docker push kuroiumi/zuul-api-gateway; cd ..
cd theaters-service; echo "\033[1;96m Execution directory: `pwd | xargs basename` \033[0m"; ./gradlew clean build; docker push kuroiumi/theaters-service; cd ..
cd movies-service; echo "\033[1;96m Execution directory: `pwd | xargs basename` \033[0m"; ./gradlew clean build; docker push kuroiumi/movies-service; cd ..
cd users-service; echo "\033[1;96m Execution directory: `pwd | xargs basename` \033[0m"; ./gradlew clean build; cd ..
