package com.mark.testspring.lock.annotation;

import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.METHOD)
@Transactional(rollbackFor = Error.class, propagation = Propagation.REQUIRES_NEW)
@Retention(RetentionPolicy.RUNTIME)
public @interface LockParamToken {
    int paramIndex();
}
