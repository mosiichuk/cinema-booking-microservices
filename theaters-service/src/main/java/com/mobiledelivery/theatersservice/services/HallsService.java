package com.mobiledelivery.theatersservice.services;

import com.mobiledelivery.theatersservice.services.data.HallData;

import java.time.LocalDate;
import java.util.List;

public interface HallsService {
    List<HallData> findAllBy(long movieId, LocalDate date, long theaterId);
}
