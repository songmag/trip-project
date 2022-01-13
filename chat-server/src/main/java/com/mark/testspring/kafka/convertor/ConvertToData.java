package com.mark.testspring.kafka.convertor;

import com.mark.testspring.kafka.event.MarkKafkaEvent;

public interface ConvertToData<T extends MarkKafkaEvent> {
    T convert(String data);
    boolean canConvert(Class<?> clazz);
}
