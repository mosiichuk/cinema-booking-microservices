package com.cinema.booking.moviesservice.controllers.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
public class MovieDto {
    private String id;
    private String name;
    private String img;
    private String trailerUrl;
    private String year;
    private String country;
    private String language;
    private String genres;
    private String starring;
    private String director;
    private String writtenBy;
    private LocalDate releaseDate;
    private String movieTiming;
    private String ageLimit;
    private String synopsis;
}
