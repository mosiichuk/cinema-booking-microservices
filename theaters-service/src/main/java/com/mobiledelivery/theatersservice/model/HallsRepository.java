package com.mobiledelivery.theatersservice.model;

import com.mobiledelivery.theatersservice.model.entities.HallEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.time.LocalDate;
import java.util.List;

public interface HallsRepository extends CrudRepository<HallEntity, Long> {

    @Query("SELECT DISTINCT(h) FROM HallEntity as h left outer join ShowingEntity as sh on h.id=sh.hall.id where h" +
            ".theater.id=?1 AND sh.date=?2")
    List<HallEntity> findAllByTheaterIdAndShowingsDate(long theaterId, LocalDate date);
}

