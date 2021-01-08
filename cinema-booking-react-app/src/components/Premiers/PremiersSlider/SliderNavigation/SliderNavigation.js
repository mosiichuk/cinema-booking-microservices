import React from 'react';

import classes from './SliderNavigation.module.sass'

const SliderNavigation = ({slidesAmount, currentSlideIndex}) => {

    return (
        <div className="d-none d-md-flex justify-content-center">
            {[...Array(slidesAmount)].map((e, index) => {
                const activeClassName = index === currentSlideIndex ? classes.Active : '';

                return (
                    <div
                        key={index}
                        className={`${classes.NavigationItem} ${activeClassName}`}
                    />
                );
            })}
        </div>
    );
};

export default SliderNavigation;
