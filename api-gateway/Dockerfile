FROM adoptopenjdk/openjdk11:alpine-jre
WORKDIR /opt/app
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} zuul-api-gateway.jar
ENTRYPOINT ["java","-jar","zuul-api-gateway.jar"]