package com.cinema.booking.moviesservice.services;

import com.cinema.booking.moviesservice.model.MovieEntity;
import com.cinema.booking.moviesservice.model.MoviesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
public class MoviesServiceImpl implements MoviesService {

    @Autowired
    private MoviesRepository moviesRepository;

    @Override
    public MovieEntity findMovieById(Long id) {
        Optional<MovieEntity> movieById = moviesRepository.findById(id);

        if (!movieById.isPresent())
            throw new EntityNotFoundException("Movie for id: " + id + " not found");

        return movieById.get();
    }

    @Override
    public List<MovieEntity> findMoviesByIds(List<Long> ids) {
        return moviesRepository.findByIdIn(ids);
    }
}
