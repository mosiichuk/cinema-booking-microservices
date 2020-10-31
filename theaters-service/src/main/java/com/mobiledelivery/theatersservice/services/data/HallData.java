package com.mobiledelivery.theatersservice.services.data;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class HallData {
    private long id;
    private String name;
    private List<ShowingData> showings;
}
