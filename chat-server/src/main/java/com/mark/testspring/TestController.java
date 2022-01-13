package com.mark.testspring;

import com.mark.testspring.chat.ChatMessage;
import com.mark.testspring.kafka.event.ChatEvent;
import com.mark.testspring.lock.LockEntity;
import com.mark.testspring.lock.LockRepository;
import com.mark.testspring.lock.annotation.LockParamToken;
import com.mark.testspring.service.ChatKafkaProducerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequiredArgsConstructor
public class TestController {
    private final UseCase useCase;
    private final ChatKafkaProducerService chatKafkaProducerService;

    @GetMapping(value = "/{user}")
    public String test(@PathVariable("user") String token) throws InterruptedException {
        return useCase.runCommand("KKK", token);
    }

    @PostMapping(value = "/{user}")
    public String test2(@PathVariable("user") String token) {
        return useCase.saveCommand(token).toString();
    }

    @PostMapping(value = "/message")
    public void kafkaMessage(@RequestBody ChatMessage chatMessage) {
        ChatEvent chatEvent = ChatEvent.builder()
                .message(chatMessage.getMessage())
                .userToken(chatMessage.getUserToken())
                .roomNumber(chatMessage.getRoomNumber())
                .localDateTime(LocalDateTime.now())
                .build();
        chatKafkaProducerService.sendChatEvent(chatEvent);
    }

    @RequiredArgsConstructor
    @Component
    public static class UseCase {
        private final LockRepository lockRepository;

        @Transactional
        public LockEntity saveCommand(String user) {
            return lockRepository.save(LockEntity.createNewLockEntity(user));
        }

        @LockParamToken(paramIndex = 2)
        public String runCommand(String test, String user) throws InterruptedException {
            System.out.println("Start\n" + Thread.currentThread().getName() + "\n");
            Thread.sleep(10000L);
            return Thread.currentThread().getName() + " :: DONE\n";
        }
    }
}
