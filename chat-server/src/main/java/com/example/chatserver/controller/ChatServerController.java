package com.example.chatserver.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChatServerController {

    @GetMapping
    public String helloController(){
        return "Hello Spring Chat";
    }
}
