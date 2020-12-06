package com.mobiledelivery.theatersservice.services;

import com.mobiledelivery.theatersservice.services.data.SeatData;

import java.util.List;

public interface SeatsService {
    List<SeatData> findAllByShowingId(long showingId, String userId);
}
