package com.example.chatserver.configure;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("test")
@Getter
@Setter
public class TestConfigure {
    public String name;
    public int age;
    public String address;
}
