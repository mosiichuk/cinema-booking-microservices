package com.mobiledelivery.theatersservice.services.impl;

import com.mobiledelivery.theatersservice.model.ReservationsRepository;
import com.mobiledelivery.theatersservice.model.SeatRepository;
import com.mobiledelivery.theatersservice.model.ShowingsRepository;
import com.mobiledelivery.theatersservice.model.entities.SeatEntity;
import com.mobiledelivery.theatersservice.model.entities.SeatReservationEntity;
import com.mobiledelivery.theatersservice.model.entities.ShowingEntity;
import com.mobiledelivery.theatersservice.services.ReservationsService;
import com.mobiledelivery.theatersservice.services.data.ReservationData;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ReservationsServiceImpl implements ReservationsService {

    @Autowired
    private ReservationsRepository reservationsRepository;

    @Autowired
    private ShowingsRepository showingsRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private SeatRepository seatRepository;

    @Override
    public ReservationData createReservation(ReservationData reservationData) {
        checkIfReservationExistsAlready(reservationData);

        SeatReservationEntity seatReservation = new SeatReservationEntity();
        seatReservation.setReserved(reservationData.isReserved());
        seatReservation.setSeat(findSeat(reservationData.getSeatId()));
        seatReservation.setShowing(findShowing(reservationData.getShowingId()));
        seatReservation.setUserId(reservationData.getUserId());

        return modelMapper.map(reservationsRepository.save(seatReservation), ReservationData.class);
    }

    private void checkIfReservationExistsAlready(ReservationData reservationData) {
        Optional<SeatReservationEntity> reservation = reservationsRepository
                .findByShowingIdAndSeatId(reservationData.getShowingId(), reservationData.getSeatId());

        if (reservation.isPresent())
            throw new DuplicateKeyException("");
    }

    @Override
    public List<ReservationData> findAllByShowingId(long id) {
        return reservationsRepository.findAllByShowingId(id).stream()
                .map(this::convert)
                .collect(Collectors.toList());
    }

    @Override
    public List<ReservationData> findAllByShowingIdAndUserId(long id, String userId) {
        return reservationsRepository.findAllByShowingIdAndUserId(id, userId).stream()
                .map(this::convert)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteById(long id) {
        reservationsRepository.deleteById(id);
    }

    private ReservationData convert(SeatReservationEntity seatReservationEntity) {
        ReservationData reservationData = modelMapper.map(seatReservationEntity, ReservationData.class);
        reservationData.setSeatId(seatReservationEntity.getSeat().getId());
        reservationData.setShowingId(seatReservationEntity.getShowing().getId());
        return reservationData;
    }

    private ShowingEntity findShowing(long id) {
        Optional<ShowingEntity> showing = showingsRepository.findById(id);
        return showing.orElseThrow(() -> new EntityNotFoundException("Showing by id " + id + " not found!"));
    }

    private SeatEntity findSeat(long id) {
        Optional<SeatEntity> seat = seatRepository.findById(id);
        return seat.orElseThrow(() -> new EntityNotFoundException("Seat by id " + id + " not found!"));
    }
}
