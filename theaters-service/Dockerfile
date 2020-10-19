FROM adoptopenjdk/openjdk11:alpine-jre
WORKDIR /opt/app
ARG JAR_FILE=build/libs/*.war
COPY ${JAR_FILE} theater-service.war
ENTRYPOINT ["java","-jar","theater-service.war"]