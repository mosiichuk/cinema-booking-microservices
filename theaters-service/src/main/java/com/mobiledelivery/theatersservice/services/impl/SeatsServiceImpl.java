package com.mobiledelivery.theatersservice.services.impl;

import com.mobiledelivery.theatersservice.model.SeatRepository;
import com.mobiledelivery.theatersservice.model.entities.SeatEntity;
import com.mobiledelivery.theatersservice.services.SeatsService;
import com.mobiledelivery.theatersservice.services.data.SeatData;
import com.mobiledelivery.theatersservice.utils.ObjectMapperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SeatsServiceImpl implements SeatsService {

    @Autowired
    private SeatRepository seatRepository;

    @Override
    public List<SeatData> findAllByShowingId(long showingId) {
        List<SeatEntity> seats = seatRepository.findByShowingId(showingId);

        return ObjectMapperUtils.mapAll(seats, SeatData.class);
    }
}
