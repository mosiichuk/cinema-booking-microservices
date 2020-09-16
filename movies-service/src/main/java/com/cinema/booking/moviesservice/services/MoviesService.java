package com.cinema.booking.moviesservice.services;

import com.cinema.booking.moviesservice.model.MovieEntity;

import java.util.List;

public interface MoviesService {
    MovieEntity findMovieById(Long id);
    List<MovieEntity> findMoviesByIds(List<Long> ids);
}
