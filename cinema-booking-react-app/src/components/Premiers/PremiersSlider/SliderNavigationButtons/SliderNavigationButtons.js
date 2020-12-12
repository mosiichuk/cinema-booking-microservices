import React from 'react';
import arrowLeft from 'assets/icons/arrow-left.png';
import arrowRight from 'assets/icons/arrow-right.png';
import classes from './SliderNavigationButtons.module.sass';

const SliderNavigationButtons = ({slidesAmount, currentSlideIndex, setCurrentSlideIndex}) => {
    const goToNextSlide = () => {
        const newSlideIndex = currentSlideIndex + 1;

        if (newSlideIndex >= slidesAmount)
            return;

        setCurrentSlideIndex(newSlideIndex);
    };

    const goToPrevSlide = () => {
        const newSlideIndex = currentSlideIndex - 1;

        if (newSlideIndex < 0)
            return;

        setCurrentSlideIndex(newSlideIndex);
    };

    return (
        <div className={classes.SliderNavigationButtons}>
            <div className={classes.SliderNavigationItem}>
                <div className={classes.SliderNavigationButton} onClick={goToPrevSlide}>
                    <img src={arrowLeft} alt="back button"/>
                </div>
                <p>back</p>
            </div>
            <div className={classes.SliderNavigationItem}>
                <div className={classes.SliderNavigationButton} onClick={goToNextSlide}>
                    <img src={arrowRight} alt="next button"/>
                </div>
                <p>next</p>
            </div>
        </div>
    );
};

export default SliderNavigationButtons;
