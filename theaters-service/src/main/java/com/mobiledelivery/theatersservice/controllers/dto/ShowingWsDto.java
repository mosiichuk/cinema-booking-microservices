package com.mobiledelivery.theatersservice.controllers.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;

@Data
@NoArgsConstructor
public class ShowingWsDto implements Serializable {

    private static final long serialVersionUID = -9135173507608150625L;

    private long id;

    private LocalDate date;

    private String showTime;

}