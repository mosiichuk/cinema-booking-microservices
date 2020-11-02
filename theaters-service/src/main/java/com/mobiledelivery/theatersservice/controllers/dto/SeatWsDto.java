package com.mobiledelivery.theatersservice.controllers.dto;

import com.mobiledelivery.theatersservice.model.entities.SeatType;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class SeatWsDto {
    private long id;

    private int rowNumber;

    private int seatNumber;

    private SeatType seatType;

    private boolean isReserved;

    private boolean isReservedByUser;
}
