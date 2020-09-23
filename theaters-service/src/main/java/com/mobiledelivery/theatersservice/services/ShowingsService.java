package com.mobiledelivery.theatersservice.services;

import com.mobiledelivery.theatersservice.services.data.ShowingData;

import java.time.LocalDate;
import java.util.List;

public interface ShowingsService {
    List<ShowingData> findAll(String movieId, LocalDate date);
    ShowingData findById(long showingId);
}
