package com.mobiledelivery.theatersservice.services.impl;

import com.mobiledelivery.theatersservice.model.MoviesRepository;
import com.mobiledelivery.theatersservice.services.data.MovieData;
import com.mobiledelivery.theatersservice.services.MoviesService;
import com.mobiledelivery.theatersservice.utils.ObjectMapperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MoviesServiceImpl implements MoviesService {
    private MoviesRepository moviesRepository;
    
    @Autowired
    public MoviesServiceImpl(MoviesRepository moviesRepository) {
        this.moviesRepository = moviesRepository;
    }

    @Override
    public List<MovieData> findMovies(boolean active) {
        return ObjectMapperUtils.mapAll(moviesRepository.findAllByActive(active), MovieData.class);
    }

    @Override
    public List<MovieData> findMoviesByTheaterId(boolean active, long theaterId) {
        return ObjectMapperUtils.mapAll(moviesRepository.findAllByActiveAndShowingsHallTheaterId(active, theaterId), MovieData.class);
    }
}
