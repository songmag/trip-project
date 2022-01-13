package com.mark.testspring.kafka.convertor;

import com.mark.testspring.kafka.event.MarkKafkaEvent;

public interface ConvertToString<T extends MarkKafkaEvent> {
    String convert(T data);
    boolean canConvert(Class<?> clazz);
}
