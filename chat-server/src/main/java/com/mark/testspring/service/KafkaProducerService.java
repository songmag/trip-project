package com.mark.testspring.service;

import com.mark.testspring.kafka.convertor.ConvertToString;
import com.mark.testspring.kafka.event.MarkKafkaEvent;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.util.concurrent.ListenableFuture;

import java.util.List;


public abstract class KafkaProducerService<T extends MarkKafkaEvent> {
    private ConvertToString<T> convertToString;
    private KafkaTemplate<Integer, String> kafkaTemplate;

    protected KafkaProducerService(Class<T> markKafkaEventClass,
                                   List<ConvertToString<T>> convertToStringList,
                                   KafkaTemplate<Integer, String> kafkaTemplate
    ) {

        this.convertToString = convertToStringList.stream().filter(
                        markKafkaEventConvertToData -> markKafkaEventConvertToData.canConvert(markKafkaEventClass)
                ).findFirst()
                .orElseThrow();

        this.kafkaTemplate = kafkaTemplate;
    }

    protected void sendMessage(String topic, int key, T data) {
        beforeSendMessage();
        ListenableFuture<SendResult<Integer, String>> send = kafkaTemplate.send(topic, key, convertToString.convert(data));
        afterSendMessage(send);
    }

    protected abstract void beforeSendMessage();
    protected abstract void afterSendMessage(ListenableFuture<SendResult<Integer,String>> future);


}
