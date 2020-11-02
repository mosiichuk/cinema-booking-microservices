package com.mobiledelivery.theatersservice.model.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "reservations")
@Data
@NoArgsConstructor
public class ReservationEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private boolean reserved;

    private String userId;

    private boolean paid;

    @OneToMany(mappedBy = "showing", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private Set<SeatReservation> seatReservations;
}
