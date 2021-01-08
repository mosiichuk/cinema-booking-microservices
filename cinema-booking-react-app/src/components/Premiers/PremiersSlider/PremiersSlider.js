import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Image} from "react-bootstrap";
import classes from './PremiersSlider.module.sass'
import {Link} from "react-router-dom";

const PremiersSlider = ({slides, currentSlideIndex, setCurrentSlideIndex}) => {
    const [premierSlider, setPremierSlider] = useState(null);

    useEffect(() => {
        if (!premierSlider)
            return;

        premierSlider.slideTo(currentSlideIndex);
        premierSlider.snapGrid = [...premierSlider.slidesGrid];
    }, [currentSlideIndex]);

    useEffect(() => {
        if (!premierSlider)
            return;

        premierSlider.update();
    }, [slides]);

    return (
        <Swiper
            slidesPerView={'auto'}
            onSlideChange={(swiper) => {
                setCurrentSlideIndex(swiper.activeIndex);
            }}
            onSwiper={setPremierSlider}
        >
            {slides.map((element) => {
                return (
                    <SwiperSlide className={classes.Premier} key={element.id}>
                        <Image src={element.imgUrl} className={classes.PremierImage} alt="movie image" fluid/>

                        <div className={classes.PremierDescription}>
                            <Link to={`/movies/${element.id}`}>
                                <p>{element.genres}</p>
                                <h2>{element.name}</h2>
                            </Link>
                        </div>
                    </SwiperSlide>
                );
            })}

        </Swiper>
    );
};

export default PremiersSlider;
