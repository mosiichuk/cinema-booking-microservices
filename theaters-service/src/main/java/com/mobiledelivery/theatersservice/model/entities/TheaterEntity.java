package com.mobiledelivery.theatersservice.model.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.Set;

@Entity
@Table(name = "theaters")
@Data
@NoArgsConstructor
public class TheaterEntity {

    @Id
    private long id;

    private String name;

    @OneToMany(mappedBy = "theater", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private Set<HallEntity> halls;
}
