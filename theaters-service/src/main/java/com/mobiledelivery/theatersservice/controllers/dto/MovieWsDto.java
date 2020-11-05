package com.mobiledelivery.theatersservice.controllers.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
public class MovieWsDto implements Serializable {
    private static final long serialVersionUID = -5551996975997647427L;

    private long id;
    private String name;
    private String genres;
    private String imgUrl;
    private boolean active;
}
