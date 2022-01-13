package com.example.chatserver.configure;

import com.example.chatserver.message.Message;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;
import org.springframework.kafka.support.serializer.JsonSerializer;

import java.util.HashMap;
import java.util.Map;

@EnableKafka
@Configuration
public class ProducerConfiguration {


    @Bean
    public ProducerFactory<String, Message> producerFactory(KafkaConfigure kafkaConfigure) {
        return new DefaultKafkaProducerFactory<>(producerConfigurations(kafkaConfigure));
    }

    @Bean
    public Map<String, Object> producerConfigurations(KafkaConfigure kafkaConfigure) {
        Map<String, Object> configurations = new HashMap<>();
        configurations.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, kafkaConfigure.getKafkaUrl());
        configurations.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        configurations.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class);
        return configurations;
    }

    @Bean
    public KafkaTemplate<String, Message> kafkaTemplate(KafkaConfigure kafkaConfigure) {
        return new KafkaTemplate<>(producerFactory(kafkaConfigure));
    }
}