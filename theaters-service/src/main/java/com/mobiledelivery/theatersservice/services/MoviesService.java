package com.mobiledelivery.theatersservice.services;

import com.mobiledelivery.theatersservice.services.data.MovieData;

import java.util.List;

public interface MoviesService {
    List<MovieData> findMovies(boolean active);
    List<MovieData> findMoviesByTheaterId(boolean active, long theaterId);
}
