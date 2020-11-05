package com.mobiledelivery.theatersservice.services.impl;

import com.mobiledelivery.theatersservice.model.SeatRepository;
import com.mobiledelivery.theatersservice.model.entities.SeatEntity;
import com.mobiledelivery.theatersservice.services.ReservationsService;
import com.mobiledelivery.theatersservice.services.SeatsService;
import com.mobiledelivery.theatersservice.services.data.ReservationData;
import com.mobiledelivery.theatersservice.services.data.SeatData;
import com.mobiledelivery.theatersservice.utils.ObjectMapperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class SeatsServiceImpl implements SeatsService {

    @Autowired
    private SeatRepository seatRepository;

    @Autowired
    private ReservationsService reservationsService;

    @Override
    public List<SeatData> findAllByShowingId(long showingId) {
        List<SeatEntity> seats = seatRepository.findByShowingId(showingId);

        Map<Long, ReservationData> reservations = reservationsService.findAllByShowingId(showingId).stream()
                .collect(Collectors.toMap(ReservationData::getSeatId, Function.identity()));

        List<SeatData> seatDataList = ObjectMapperUtils.mapAll(seats, SeatData.class);

        seatDataList.forEach(seat -> {
            seat.setReserved(reservations.containsKey(seat.getId()));
        });

        return seatDataList;
    }
}
