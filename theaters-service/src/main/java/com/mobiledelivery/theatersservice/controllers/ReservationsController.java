package com.mobiledelivery.theatersservice.controllers;

import com.mobiledelivery.theatersservice.controllers.dto.ReservationWsDto;
import com.mobiledelivery.theatersservice.services.ReservationsService;
import com.mobiledelivery.theatersservice.services.data.ReservationData;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/reservations")
public class ReservationsController {
    private ReservationsService reservationsService;
    private ModelMapper modelMapper;

    @Autowired
    public ReservationsController(ReservationsService reservationsService, ModelMapper modelMapper) {
        this.reservationsService = reservationsService;
        this.modelMapper = modelMapper;
    }

    @PostMapping
    public ReservationWsDto createReservation(@RequestBody ReservationWsDto reservationWsDto) {
        ReservationData reservation = reservationsService.createReservation(
                modelMapper.map(reservationWsDto, ReservationData.class));
        return modelMapper.map(reservation, ReservationWsDto.class);
    }
}
