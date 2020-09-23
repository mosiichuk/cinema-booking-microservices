package com.mobiledelivery.theatersservice.model;

import com.mobiledelivery.theatersservice.model.entities.MovieEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MoviesRepository extends CrudRepository<MovieEntity, Long> {
    List<MovieEntity> findAllByActive(boolean active);
}
