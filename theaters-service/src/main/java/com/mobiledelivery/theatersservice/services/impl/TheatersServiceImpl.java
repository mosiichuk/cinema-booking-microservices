package com.mobiledelivery.theatersservice.services.impl;

import com.mobiledelivery.theatersservice.model.TheatersRepository;
import com.mobiledelivery.theatersservice.model.entities.TheaterEntity;
import com.mobiledelivery.theatersservice.services.TheatersService;
import com.mobiledelivery.theatersservice.services.data.TheaterData;
import com.mobiledelivery.theatersservice.utils.ObjectMapperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TheatersServiceImpl implements TheatersService {
    private TheatersRepository theatersRepository;

    @Autowired
    public TheatersServiceImpl(TheatersRepository theatersRepository) {
        this.theatersRepository = theatersRepository;
    }

    @Override
    public List<TheaterData> getAllTheaters() {
        List<TheaterEntity> theaters = theatersRepository.findAll();
        return ObjectMapperUtils.mapAll(theaters, TheaterData.class);
    }
}
