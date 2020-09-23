package com.mobiledelivery.theatersservice.services.data;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class MovieData {
    private long id;

    private String name;

    private String genres;

    private String imgUrl;

    private boolean active;
}
