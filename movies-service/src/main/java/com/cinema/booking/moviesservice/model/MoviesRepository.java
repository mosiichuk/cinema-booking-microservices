package com.cinema.booking.moviesservice.model;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MoviesRepository extends CrudRepository<MovieEntity, Long> {
    List<MovieEntity> findByIdIn(List<Long> moviesIdsList);
}
