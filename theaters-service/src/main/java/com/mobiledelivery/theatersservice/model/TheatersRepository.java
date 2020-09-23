package com.mobiledelivery.theatersservice.model;

import com.mobiledelivery.theatersservice.model.entities.TheaterEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TheatersRepository extends CrudRepository<TheaterEntity, Long> {
    List<TheaterEntity> findAll();
}
