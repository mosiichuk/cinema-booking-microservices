package com.mobiledelivery.theatersservice.controllers.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Data
@NoArgsConstructor
public class HallWsDto implements Serializable {
    private static final long serialVersionUID = -9135173507608150625L;

    private long id;
    private String name;
    private List<ShowingWsDto> showings;
}