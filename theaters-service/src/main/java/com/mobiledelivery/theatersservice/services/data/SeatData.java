package com.mobiledelivery.theatersservice.services.data;

import com.mobiledelivery.theatersservice.model.entities.SeatType;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class SeatData {

    private long id;

    private int rowNumber;

    private int seatNumber;

    private SeatType seatType;

    private boolean isReserved;

    private boolean isReservedByUser;

    private long reservationId;
}
