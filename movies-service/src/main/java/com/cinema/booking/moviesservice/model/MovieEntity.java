package com.cinema.booking.moviesservice.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@Entity
@Table(name = "movies")
public class MovieEntity {
    @Id
    private Long id;
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
