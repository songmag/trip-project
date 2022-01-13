package com.mark.testspring.lock.aspect;

import com.mark.testspring.lock.LockEntity;
import com.mark.testspring.lock.LockRepository;
import com.mark.testspring.lock.annotation.LockClassToken;
import com.mark.testspring.lock.annotation.LockParamToken;
import lombok.RequiredArgsConstructor;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.dao.PessimisticLockingFailureException;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Optional;

@RequiredArgsConstructor
@Aspect
@Component
public class LockAspect {

    private final LockRepository lockRepository;
    private final EntityManager entityManager;

    @Around("@annotation(com.mark.testspring.lock.annotation.LockParamToken)")
    public Object lockParamToken(ProceedingJoinPoint joinPoint) {
        System.out.println("LOCK Start");
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        Method method = signature.getMethod();
        LockParamToken lockMethod = method.getAnnotation(LockParamToken.class);
        String token = (String) joinPoint.getArgs()[lockMethod.paramIndex() - 1];
        Object returnValue = null;
        try {
            returnValue = runProcess(token,joinPoint);
        } catch (PessimisticLockingFailureException e) {
            return "이미 진행 중 입니다.";
        } catch (Throwable throwable) {
            throwable.printStackTrace();
        }
        System.out.println("Lock End");
        return returnValue;
    }

    @Around("@annotation(com.mark.testspring.lock.annotation.LockClassToken)")
    public Object lockClassToken(ProceedingJoinPoint joinPoint) {
        System.out.println("LOCK Start");
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        Method method = signature.getMethod();
        LockClassToken lockMethod = method.getAnnotation(LockClassToken.class);
        String token = findTokenByClass(joinPoint.getArgs(), lockMethod.tokenName(), lockMethod.targetClass());
        Object returnValue = null;
        try {
            returnValue = runProcess(token,joinPoint);
        } catch (PessimisticLockingFailureException e) {
            return "이미 진행 중 입니다.\n";
        } catch (Throwable throwable) {
            throwable.printStackTrace();
        }
        System.out.println("Lock End");
        return returnValue;
    }

    public String findTokenByClass(Object[] args, String methodName, Class<?> targetClass) {
        Field field = getTokenMethodByClass(targetClass, methodName);
        String token = null;
        for (int i = 0; i < args.length; i++) {
            if (args[i].getClass() == targetClass) {
                try {
                    token = (String) field.get(args);
                } catch (IllegalAccessException e) {
                    e.printStackTrace();
                }
            }
        }
        return token;
    }

    private Field getTokenMethodByClass(Class<?> clazz, String methodName) {
        try {
            return clazz.getDeclaredField(methodName);
        } catch (NoSuchFieldException e) {
            e.printStackTrace();
        }
        return null;
    }

    public Optional<LockEntity> createLockEntity(String token){
        LockEntity entity = LockEntity.createNewLockEntity(token);
        Optional<LockEntity> returnValue = lockRepository.findWithNonPessimisticByToken(token);
        if(returnValue.isEmpty()) {
            lockRepository.saveAndFlush(entity);
        }
        return lockRepository.findByToken(token);
    }

    @Transactional
    public Object runProcess(String token,ProceedingJoinPoint joinPoint) throws Throwable {
        Optional<LockEntity> entity = createLockEntity(token);
        entityManager.flush();
        entity.orElseThrow(NullPointerException::new).lock();
        return joinPoint.proceed();
    }
}
