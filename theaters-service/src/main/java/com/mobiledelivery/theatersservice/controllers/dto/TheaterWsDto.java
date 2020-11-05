package com.mobiledelivery.theatersservice.controllers.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
public class TheaterWsDto implements Serializable {
    private static final long serialVersionUID = 7945680788654741376L;

    private String id;
    private String name;
}
