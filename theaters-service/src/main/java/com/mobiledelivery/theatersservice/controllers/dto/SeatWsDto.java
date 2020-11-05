package com.mobiledelivery.theatersservice.controllers.dto;

import com.mobiledelivery.theatersservice.model.entities.SeatType;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
public class SeatWsDto implements Serializable {
    private static final long serialVersionUID = -313022190799065952L;

    private long id;
    private int rowNumber;
    private int seatNumber;
    private SeatType seatType;
    private boolean isReserved;
    private boolean isReservedByUser;
}
