package com.mobiledelivery.theatersservice.model.entities;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "seatReservations")
@Data
@NoArgsConstructor
public class SeatReservationEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "seatId", nullable = false)
    @ToString.Exclude
    private SeatEntity seat;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "showingId", nullable = false)
    @ToString.Exclude
    private ShowingEntity showing;

    private boolean reserved;

    private String userId;

    private boolean paid;
}
