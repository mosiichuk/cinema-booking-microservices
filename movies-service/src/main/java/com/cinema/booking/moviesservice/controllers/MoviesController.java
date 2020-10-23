package com.cinema.booking.moviesservice.controllers;

import com.cinema.booking.moviesservice.controllers.dto.MovieDto;
import com.cinema.booking.moviesservice.model.MovieEntity;
import com.cinema.booking.moviesservice.services.MoviesService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static java.time.LocalDate.now;
import static java.util.Collections.emptyList;

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

    @GetMapping
    public List<MovieDto> getMoviesDetails(@RequestParam(required = false) List<Long> ids,
                                           @RequestParam(required = false, defaultValue = "#{T(java.time.LocalDateTime).now()}")
                                           @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate afterDate) {
        List<MovieEntity> movies = CollectionUtils.isEmpty(ids)
                ? moviesService.findAll()
                : moviesService.findMoviesByIds(ids, afterDate);

        return movies.stream()
                .map(entry -> modelMapper.map(entry, MovieDto.class))
                .collect(Collectors.toList());
    }

    @GetMapping("/{movieId}")
    public MovieDto getMovieDetails(@PathVariable long movieId) {
        MovieEntity movieById = moviesService.findMovieById(movieId);
        return modelMapper.map(movieById, MovieDto.class);
    }
}
