package com.example.chatserver.controller;

import com.example.chatserver.message.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.concurrent.ExecutionException;

@RestController("chat-server")
public class ChatController {
    private KafkaTemplate<String, Message> kafkaTemplate;



    public ChatController(KafkaTemplate<String,Message> kafkaTemplate){
        this.kafkaTemplate = kafkaTemplate;
    }
}