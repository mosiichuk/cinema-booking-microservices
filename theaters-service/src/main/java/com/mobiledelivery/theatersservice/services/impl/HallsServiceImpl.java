package com.mobiledelivery.theatersservice.services.impl;

import com.mobiledelivery.theatersservice.model.HallsRepository;
import com.mobiledelivery.theatersservice.services.HallsService;
import com.mobiledelivery.theatersservice.services.data.HallData;
import com.mobiledelivery.theatersservice.utils.ObjectMapperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class HallsServiceImpl implements HallsService {
    private HallsRepository hallsRepository;

    @Autowired
    public HallsServiceImpl(HallsRepository hallsRepository) {
        this.hallsRepository = hallsRepository;
    }

    @Override
    public List<HallData> findAllBy(long movieId, LocalDate date, long theaterId) {
        return ObjectMapperUtils
                .mapAll(hallsRepository.findAllByTheaterIdAndShowingsDate(theaterId, date),
                        HallData.class);
    }
}

