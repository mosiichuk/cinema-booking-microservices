package com.mobiledelivery.theatersservice.model;

import com.mobiledelivery.theatersservice.model.entities.MovieEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MoviesRepository extends CrudRepository<MovieEntity, Long> {
    List<MovieEntity> findAllByActive(boolean active);
    @Query("SELECT DISTINCT(m) FROM MovieEntity as m join ShowingEntity as sh on m.id=sh.movie.id where sh" +
            ".hall.theater.id=?2 AND m.active=?1")
    List<MovieEntity> findAllByActiveAndShowingsHallTheaterId(boolean active, long theaterId);
}
