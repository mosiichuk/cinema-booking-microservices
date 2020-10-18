package com.mobiledelivery.theatersservice.controllers;

import com.mobiledelivery.theatersservice.controllers.dto.MovieWsDto;
import com.mobiledelivery.theatersservice.controllers.dto.ShowingWsDto;
import com.mobiledelivery.theatersservice.controllers.dto.TheaterWsDto;
import com.mobiledelivery.theatersservice.services.MoviesService;
import com.mobiledelivery.theatersservice.services.ShowingsService;
import com.mobiledelivery.theatersservice.services.data.TheaterData;
import com.mobiledelivery.theatersservice.services.TheatersService;
import com.mobiledelivery.theatersservice.utils.ObjectMapperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/theaters")
public class TheatersController {

    private TheatersService theatersService;
    private MoviesService moviesService;
    private ShowingsService showingsService;

    @Autowired
    public TheatersController(TheatersService theatersService,
                              MoviesService moviesService,
                              ShowingsService showingsService) {
        this.theatersService = theatersService;
        this.moviesService = moviesService;
        this.showingsService = showingsService;
    }

    @GetMapping
    public List<TheaterWsDto> getAllTheaters() {
        List<TheaterData> theaters = theatersService.getAllTheaters();
        return ObjectMapperUtils.mapAll(theaters, TheaterWsDto.class);
    }

    @GetMapping("/{theaterId}/movies")
    public List<MovieWsDto> getMovies(@RequestParam boolean active, @PathVariable long theaterId) {
        return ObjectMapperUtils.mapAll(moviesService.findMoviesByTheaterId(active, theaterId), MovieWsDto.class);
    }

    @GetMapping("/{theaterId}/showings")
    public List<ShowingWsDto> getShowings(@RequestParam long movieId,
                                          @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) @RequestParam LocalDate date,
                                        @PathVariable long theaterId) {
        return ObjectMapperUtils.mapAll(showingsService.findAll(movieId, date, theaterId), ShowingWsDto.class);
    }

    @GetMapping("/{theaterId}/showings/{showingId}")
    public ShowingWsDto getMovies(@PathVariable long showingId) {
        return ObjectMapperUtils.map(showingsService.findById(showingId), ShowingWsDto.class);
    }
}
