package com.mark.testspring.kafka.event;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ChatEvent implements MarkKafkaEvent{
    private String userToken;
    private String message;
    private Integer roomNumber;
    private LocalDateTime localDateTime;
}
