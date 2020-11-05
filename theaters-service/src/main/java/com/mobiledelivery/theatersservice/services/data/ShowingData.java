package com.mobiledelivery.theatersservice.services.data;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
public class ShowingData {
    private long id;

    private LocalDate date;

    private String showTime;

    private MovieData movie;

    private HallData hall;

}
