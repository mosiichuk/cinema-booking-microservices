package com.mobiledelivery.theatersservice.controllers.dto;

import com.sun.istack.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
public class ReservationWsDto implements Serializable {
    private static final long serialVersionUID = -2474076750065329830L;

    private long id;

    @NotNull
    private long seatId;
    @NotNull
    private long showingId;
    @NotNull
    private boolean reserved;

    private String userId;
}
