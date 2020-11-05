package com.mobiledelivery.theatersservice.model.entities;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "seats")
@Data
@NoArgsConstructor
public class SeatEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private int rowNumber;

    private int seatNumber;

    @Enumerated(EnumType.STRING)
    private SeatType seatType;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "hallId", nullable = false)
    @ToString.Exclude
    private HallEntity hall;

    @OneToMany(mappedBy = "showing", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    @ToString.Exclude
    private Set<SeatReservationEntity> seatReservations;
}
