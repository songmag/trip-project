FROM adoptopenjdk/openjdk11
LABEL maintainer="face-trip-chat-server"
ARG JAR_FILE=build/libs/chat-server-0.0.1.jar
ADD ${JAR_FILE} chat-server.jar
COPY ${JAR_FILE} chat-server.jar
ENV USE_PROFILE dev
EXPOSE 80
ENTRYPOINT ["java","-jar","-Dspring.profiles.active=${USE_PROFILE}","/chat-server.jar"]

