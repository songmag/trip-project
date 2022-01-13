package com.mark.testspring.lock.annotation;


import org.aspectj.lang.annotation.Aspect;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.lang.annotation.*;
import java.lang.reflect.Method;

@Target(ElementType.METHOD)
@Transactional(rollbackFor = Error.class, propagation = Propagation.REQUIRES_NEW)
@Retention(RetentionPolicy.RUNTIME)
public @interface LockClassToken {
    String tokenName() default "token";
    Class<?> targetClass();
}
