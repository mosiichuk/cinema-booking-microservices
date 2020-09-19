package com.cinemabooking.usersservice.model;

import com.cinemabooking.usersservice.model.entity.UserEntity;
import org.springframework.data.repository.CrudRepository;

public interface UsersRepository extends CrudRepository<UserEntity, Long> {
    UserEntity findByEmail(String email);
}
