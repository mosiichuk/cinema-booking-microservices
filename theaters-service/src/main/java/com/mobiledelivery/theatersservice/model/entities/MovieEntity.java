package com.mobiledelivery.theatersservice.model.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name = "movies")
@Data
@NoArgsConstructor
public class MovieEntity {

    @Id
    private long id;

    private String name;

    private String genres;

    private String imgUrl;

    private boolean active;

    @OneToMany(mappedBy = "movie", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private List<ShowingEntity> showings;
}

