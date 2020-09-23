package com.mobiledelivery.theatersservice.model.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "halls")
@Data
@NoArgsConstructor
public class HallEntity {

    @Id
    private long id;

    private String name;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "theaterId", nullable = false)
    private TheaterEntity theater;

    @OneToMany(mappedBy = "hall", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private Set<SeatEntity> seats;

    @OneToMany(mappedBy = "hall", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private List<ShowingEntity> showing;
}
