package com.mark.testspring.lock;

import org.springframework.dao.PessimisticLockingFailureException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.QueryHints;

import javax.persistence.LockModeType;
import javax.persistence.QueryHint;
import java.util.Optional;

public interface LockRepository extends JpaRepository<LockEntity, Long> {

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @QueryHints(
            @QueryHint( name ="javax.persistence.lock.timeout",value ="0")
    )
    Optional<LockEntity> findByToken(String token) throws PessimisticLockingFailureException;

    Optional<LockEntity> findWithNonPessimisticByToken(String token);
}
