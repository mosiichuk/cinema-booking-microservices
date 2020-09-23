package com.mobiledelivery.theatersservice.model;

import com.mobiledelivery.theatersservice.model.entities.ShowingEntity;
import org.springframework.data.repository.CrudRepository;

import java.time.LocalDate;
import java.util.List;

public interface ShowingsRepository extends CrudRepository<ShowingEntity, Long> {
    List<ShowingEntity> findAllByMovieIdAndDate(String movieId, LocalDate date);
}
