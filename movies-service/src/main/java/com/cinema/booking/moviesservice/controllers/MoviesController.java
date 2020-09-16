package com.cinema.booking.moviesservice.controllers;

import com.cinema.booking.moviesservice.controllers.dto.MovieDto;
import com.cinema.booking.moviesservice.model.MovieEntity;
import com.cinema.booking.moviesservice.services.MoviesService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/movies")
public class MoviesController {

    private MoviesService moviesService;
    private ModelMapper modelMapper;

    @Autowired
    public MoviesController(MoviesService moviesService, ModelMapper modelMapper) {
        this.moviesService = moviesService;
        this.modelMapper = modelMapper;
    }

    @GetMapping()
    public List<MovieDto> getMoviesDetails(@RequestParam List<Long> ids) {
        List<MovieEntity> moviesByIds = moviesService.findMoviesByIds(ids);

        return moviesByIds.stream()
                .map(entry -> modelMapper.map(entry, MovieDto.class))
                .collect(Collectors.toList());
    }

    @GetMapping("/{movieId}")
    public MovieDto getMovieDetails(@PathVariable long movieId) {
        MovieEntity movieById = moviesService.findMovieById(movieId);
        return modelMapper.map(movieById, MovieDto.class);
    }
}
