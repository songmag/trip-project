package com.mark.testspring.kafka;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;

@Configuration
public class ProducerConfiguration {
    @Bean
    public KafkaTemplate<Integer,String> kafkaTemplate(ProducerFactory<Integer,String> kafkaProducerFactory){
        return new KafkaTemplate<>(kafkaProducerFactory);
    }
}
