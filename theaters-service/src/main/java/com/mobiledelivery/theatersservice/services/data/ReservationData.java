package com.mobiledelivery.theatersservice.services.data;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ReservationData {
    private long id;

    private long seatId;

    private long showingId;

    private boolean reserved;

    private String userId;

    private long rowNumber;

    private long seatNumber;

    private long price;

    private long salon;
}
