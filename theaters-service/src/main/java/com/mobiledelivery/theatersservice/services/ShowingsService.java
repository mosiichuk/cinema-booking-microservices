package com.mobiledelivery.theatersservice.services;

import com.mobiledelivery.theatersservice.services.data.ShowingData;

import java.time.LocalDate;
import java.util.List;

public interface ShowingsService {
    List<ShowingData> findAll(long movieId, LocalDate date, long theaterId);
    ShowingData findById(long showingId);
}
