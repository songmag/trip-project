package com.example.chatserver.configure;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@ConfigurationProperties(value = "kafka")
public class KafkaConfigure {
    private String url;
    private String port;

    public String getKafkaUrl(){
        return url+":"+port;
    }
}
