package com.mobiledelivery.theatersservice.services.data;

import com.mobiledelivery.theatersservice.model.entities.HallEntity;
import com.mobiledelivery.theatersservice.model.entities.MovieEntity;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
public class ShowingData {
    private long id;

    private LocalDate date;

    private String showTime;

    private MovieEntity movie;

    private HallEntity hall;
}
