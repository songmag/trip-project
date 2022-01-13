package com.mark.testspring.chat;

import lombok.Data;

@Data
public class ChatMessage {
    private String userToken;
    private String message;
    private Integer roomNumber;
}
