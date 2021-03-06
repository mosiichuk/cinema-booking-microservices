package com.mobiledelivery.theatersservice.services.impl;

import com.mobiledelivery.theatersservice.model.ShowingsRepository;
import com.mobiledelivery.theatersservice.model.entities.ShowingEntity;
import com.mobiledelivery.theatersservice.services.ShowingsService;
import com.mobiledelivery.theatersservice.services.data.ShowingData;
import com.mobiledelivery.theatersservice.utils.ObjectMapperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class ShowingsServiceImpl implements ShowingsService {

    private ShowingsRepository showingsRepository;

    @Autowired
    public ShowingsServiceImpl(ShowingsRepository showingsRepository) {
        this.showingsRepository = showingsRepository;
    }

    @Override
    public List<ShowingData> findAll(long movieId, LocalDate date, long theaterId) {
        return ObjectMapperUtils
                .mapAll(showingsRepository.findAllByMovieIdAndDateAndHallTheaterId(movieId, date, theaterId),
                        ShowingData.class);
    }

    @Override
    public ShowingData findById(long id) {
        Optional<ShowingEntity> showingEntity = showingsRepository.findById(id);

        if (showingEntity.isEmpty())
            throw new EntityNotFoundException("Showing not found by id " + id);

        ShowingEntity showing = showingEntity.get();
        showing.getHall().setShowings(Collections.emptyList());

        return ObjectMapperUtils.map(showing, ShowingData.class);
    }
}
