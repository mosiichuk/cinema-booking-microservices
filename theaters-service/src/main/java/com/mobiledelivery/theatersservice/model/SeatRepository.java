package com.mobiledelivery.theatersservice.model;

import com.mobiledelivery.theatersservice.model.entities.SeatEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface SeatRepository extends CrudRepository<SeatEntity, Long> {
    @Query("SELECT s FROM SeatEntity AS s " +
            "JOIN HallEntity AS h ON s.hall.id = h.id " +
            "JOIN ShowingEntity AS sh ON sh.hall.id = h.id " +
            "WHERE sh.id = ?1")
    List<SeatEntity> findByShowingId(long showingId);

}
