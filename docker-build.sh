#!/bin/sh

cd eureka-discovery; echo "\033[1;96m Execution directory: `pwd | xargs basename` \033[0m"; ./gradlew clean build; docker build . -t kuroiumi/eureka-discovery; cd ..
cd api-gateway; echo "\033[1;96m Execution directory: `pwd | xargs basename` \033[0m"; ./gradlew clean build; docker build . -t kuroiumi/zuul-api-gateway; cd ..
cd theaters-service; echo "\033[1;96m Execution directory: `pwd | xargs basename` \033[0m"; ./gradlew clean build; docker build . -t kuroiumi/theaters-service; cd ..
cd movies-service; echo "\033[1;96m Execution directory: `pwd | xargs basename` \033[0m"; ./gradlew clean build; docker build . -t kuroiumi/movies-service; cd ..
cd users-service; echo "\033[1;96m Execution directory: `pwd | xargs basename` \033[0m"; ./gradlew clean build; docker build . -t kuroiumi/users-service; cd ..
cd cinema-booking-react-app; echo "\033[1;96m Execution directory: `pwd | xargs basename` \033[0m"; docker build . -t kuroiumi/cinema-booking-react-app; cd ..