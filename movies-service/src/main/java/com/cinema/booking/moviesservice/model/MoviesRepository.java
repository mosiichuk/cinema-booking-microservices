package com.cinema.booking.moviesservice.model;

import org.springframework.data.repository.CrudRepository;

import java.time.LocalDate;
import java.util.List;

public interface MoviesRepository extends CrudRepository<MovieEntity, Long> {
    List<MovieEntity> findByIdInAndReleaseDateAfterOrderByReleaseDateDesc(List<Long> moviesIdsList, LocalDate afterDate);
    List<MovieEntity> findAll();
}
