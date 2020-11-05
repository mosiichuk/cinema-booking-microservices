package com.mobiledelivery.theatersservice.services;

import com.mobiledelivery.theatersservice.services.data.ReservationData;

import java.util.List;

public interface ReservationsService {
    ReservationData createReservation(ReservationData reservationData);
    List<ReservationData> findAllByShowingId(long id);
}
