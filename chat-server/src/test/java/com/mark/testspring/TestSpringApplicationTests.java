package com.mark.testspring;

import com.mark.testspring.lock.LockEntity;
import com.mark.testspring.lock.LockRepository;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.dao.PessimisticLockingFailureException;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.TransactionTemplate;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executors;

@SpringBootTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class TestSpringApplicationTests {

    @Autowired
    public LockRepository lockRepository;
    @Autowired
    EntityManager entityManager;
    @Autowired
    PlatformTransactionManager platformTransactionManager;

    public final String token = "Test";

    @BeforeAll
    void saveLock() {
        lockRepository.save(LockEntity.createNewLockEntity("Test"));
    }

    @Test
    @Transactional
    void contextLoads() throws InterruptedException {
        List<Callable<List<String>>> callables = new ArrayList<>();

        for (int i = 0; i < 5; i++) {
            TransactionTemplate transactionTemplate = new TransactionTemplate(platformTransactionManager);
            callables.add(new CallableClass(lockRepository, token, entityManager, transactionTemplate));
        }
        var executor = Executors.newFixedThreadPool(5);
        executor.invokeAll(callables).stream()
                .map(future -> {
                    try {
                        return future.get();
                    } catch (InterruptedException | ExecutionException e) {
                        e.printStackTrace();
                    }
                    return null;
                }).filter(Objects::nonNull)
                .forEach(
                        System.out::println
                );
    }

    public static class CallableClass implements Callable<List<String>> {
        private final String token;
        private final LockRepository repository;
        private final EntityManager entityManager;
        private final TransactionTemplate transactionTemplate;

        public CallableClass(LockRepository repository, String token, EntityManager entityManager, TransactionTemplate transactionTemplate) {
            this.token = token;
            this.repository = repository;
            this.entityManager = entityManager;
            this.transactionTemplate = transactionTemplate;
        }

        @Override
        @Transactional
        public List<String> call() {
            return transactionTemplate.execute(status -> {
                        List<String> consoleResult = new ArrayList<>();
                        try {
                            System.out.println("Start\n" + Thread.currentThread().getName() + "\n");
                            LockEntity lock = repository.findByToken(this.token).get();
                            lock.lock();
                            System.out.println(Thread.currentThread().getName() + "\n" + lock.isNowLock() + "\n");
                            try {
                                Thread.sleep(5000L);
                            } catch (InterruptedException e) {
                                System.out.println("EXCEPTION :: Thread SLEEP");
                            }
                            System.out.println(Thread.currentThread().getName() + "\n" + lock.isNowLock() + "\n");
                        } catch (PessimisticLockingFailureException e) {
                            LockEntity entity =repository.findWithNonPessimisticByToken(token).get();
                            System.out.println( Thread.currentThread().getName() + "ERROR:: " +entity.isNowLock());
                            System.out.println("이미 작업중입니다.");
                        }
                        consoleResult.add("DONE" + Thread.currentThread().getName());
                        return consoleResult;
                    }
            );
        }
    }
}
