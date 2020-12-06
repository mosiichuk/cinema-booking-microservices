package com.mobiledelivery.theatersservice.model;

import com.mobiledelivery.theatersservice.model.entities.SeatReservationEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface ReservationsRepository extends CrudRepository<SeatReservationEntity, Long> {
    List<SeatReservationEntity> findAllByShowingId(long id);
    List<SeatReservationEntity> findAllByShowingIdAndUserId(long id, String userId);
    Optional<SeatReservationEntity> findByShowingIdAndSeatId(long showingId, long seatId);
}
