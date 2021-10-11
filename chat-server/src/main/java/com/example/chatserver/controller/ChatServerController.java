package com.example.chatserver.controller;

import com.example.chatserver.configure.TestConfigure;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/")
public class ChatServerController {

    private TestConfigure testConfigure;

    public ChatServerController(TestConfigure testConfigure){
        this.testConfigure = testConfigure;
    }

    @GetMapping
    public String helloController(){
        return testConfigure.address+testConfigure.name+testConfigure.age;
    }

    @GetMapping(value="test")
    public String getTestController(){
        return "HelloTest";
    }
}
