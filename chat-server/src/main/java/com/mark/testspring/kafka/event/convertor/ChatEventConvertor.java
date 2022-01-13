package com.mark.testspring.kafka.event.convertor;

import com.mark.testspring.kafka.convertor.ConvertToData;
import com.mark.testspring.kafka.convertor.ConvertToString;
import com.mark.testspring.kafka.event.ChatEvent;
import com.google.gson.Gson;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ChatEventConvertor implements ConvertToData<ChatEvent>, ConvertToString<ChatEvent> {

    private final Gson gson;

    @Override
    public ChatEvent convert(String data) {
        return gson.fromJson(data,ChatEvent.class);
    }

    @Override
    public boolean canConvert(Class<?> clazz) {
        return ChatEvent.class.equals(clazz);
    }

    @Override
    public String convert(ChatEvent data) {
        return gson.toJson(data);
    }

}
