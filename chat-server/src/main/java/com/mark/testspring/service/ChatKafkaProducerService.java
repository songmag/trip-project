package com.mark.testspring.service;


import com.mark.testspring.kafka.convertor.ConvertToString;
import com.mark.testspring.kafka.event.ChatEvent;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Service;
import org.springframework.util.concurrent.ListenableFuture;

import java.util.List;

@Service
public class ChatKafkaProducerService extends KafkaProducerService<ChatEvent> {

    protected ChatKafkaProducerService(
            List<ConvertToString<ChatEvent>> convertToStringList,
            KafkaTemplate<Integer,String> kafkaTemplate
    ) {
        super(ChatEvent.class, convertToStringList, kafkaTemplate);
    }

    public void sendChatEvent(ChatEvent chatEvent){
        this.sendMessage("mark-chat",1,chatEvent);
    }

    @Override
    protected void beforeSendMessage() {

    }

    @Override
    protected void afterSendMessage(ListenableFuture<SendResult<Integer, String>> future) {

    }
}
