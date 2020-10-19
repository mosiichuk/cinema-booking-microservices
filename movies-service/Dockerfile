FROM adoptopenjdk/openjdk11:alpine-jre
WORKDIR /opt/app
ARG JAR_FILE=build/libs/*.war
COPY ${JAR_FILE} movies-service.war
ENTRYPOINT ["java","-jar","movies-service.war"]