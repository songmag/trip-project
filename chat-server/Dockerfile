FROM adoptopenjdk/openjdk11
LABEL maintainer="face-trip-chat-server"
ARG JAR_FILE=build/libs/chat-server-0.0.1.jar
ADD ${JAR_FILE} chat-server.jar
COPY ${JAR_FILE} chat-server.jar
ENTRYPOINT ["java","-jar","/chat-server.jar"]

EXPOSE 8080

