package com.mobiledelivery.theatersservice.controllers.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
public class ReservationWsDto implements Serializable {
    private static final long serialVersionUID = -2474076750065329830L;

    private long id;

    private long seatId;

    private long showingId;

    private boolean reserved;

    private String userId;
}
