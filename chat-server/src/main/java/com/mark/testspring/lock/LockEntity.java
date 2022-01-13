package com.mark.testspring.lock;

import lombok.*;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class LockEntity {
    @Id()
    @GeneratedValue()
    private Long id;
    @Column(unique = true)
    private String token;
    private boolean nowLock;

    public static LockEntity createNewLockEntity(String token) {
        return LockEntity
                .builder()
                .nowLock(false)
                .token(token)
                .build();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        LockEntity entity = (LockEntity) o;
        return Objects.equals(token, entity.token);
    }

    @Override
    public int hashCode() {
        return Objects.hash(token);
    }

    public void unLock() {
        this.nowLock = !this.nowLock;
    }

    public void lock() {
        this.nowLock = !this.nowLock;
    }
}
