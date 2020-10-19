FROM adoptopenjdk/openjdk11:alpine-jre
WORKDIR /opt/app
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} eureka-discovery.jar
ENTRYPOINT ["java","-jar","eureka-discovery.jar"]