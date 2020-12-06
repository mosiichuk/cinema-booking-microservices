package com.mobiledelivery.theatersservice.controllers;

import com.mobiledelivery.theatersservice.controllers.dto.ReservationWsDto;
import com.mobiledelivery.theatersservice.services.ReservationsService;
import com.mobiledelivery.theatersservice.services.data.ReservationData;
import com.mobiledelivery.theatersservice.utils.ObjectMapperUtils;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reservations")
public class ReservationsController {
    private static final Logger LOG = LoggerFactory.getLogger(ReservationsController.class);

    private ReservationsService reservationsService;
    private ModelMapper modelMapper;

    @Autowired
    public ReservationsController(ReservationsService reservationsService, ModelMapper modelMapper) {
        this.reservationsService = reservationsService;
        this.modelMapper = modelMapper;
    }

    @PostMapping
    public ReservationWsDto createReservation(@RequestBody ReservationWsDto reservationWsDto) {
        LOG.info("User id = {}, showing id = {}", reservationWsDto.getUserId(), reservationWsDto.getShowingId());
        ReservationData reservation = reservationsService.createReservation(
                modelMapper.map(reservationWsDto, ReservationData.class));
        return modelMapper.map(reservation, ReservationWsDto.class);
    }

    @GetMapping
    public List<ReservationWsDto> findReservations(@RequestParam long showingId, @RequestParam String userId) {
        List<ReservationData> reservations = reservationsService.findAllByShowingIdAndUserId(
                showingId, userId);
        return ObjectMapperUtils.mapAll(reservations, ReservationWsDto.class);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteReservation(@PathVariable long id) {
        reservationsService.deleteById(id);
    }

}
