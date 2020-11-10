import React, {useEffect, useState} from 'react';
import classes from './HomePage.module.sass'
import PremiersSlider from "Components/Premiers/PremiersSlider/PremiersSlider";
import SliderNavigationButtons
    from "Components/Premiers/PremiersSlider/SliderNavigationButtons/SliderNavigationButtons";
import SliderNavigation from "Components/Premiers/PremiersSlider/SliderNavigation/SliderNavigation";
import {useAppContext} from "context/AppContext";

const HomePage = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [slides, setSlides] = useState([]);
    const [appState] = useAppContext();

    useEffect(() => {
        fetch(`/api/theaters/${appState.theater.id}/movies?active=true`)
            .then(response => response.json())
            .then((data) => {
                setSlides(data);
            });
    }, [appState.theater.id]);

    return (
        <section className={classes.HomePage} id="main-screen">
            <div className={classes.PremiersSlider}>
                <PremiersSlider
                    slides={slides}
                    currentSlideIndex={currentSlideIndex}
                    setCurrentSlideIndex={setCurrentSlideIndex}
                />
            </div>
            <div className={classes.PremiersSliderNavigationRow}>
                <SliderNavigation
                    slidesAmount={slides.length}
                    currentSlideIndex={currentSlideIndex}/>

                <SliderNavigationButtons
                    slidesAmount={slides.length}
                    currentSlideIndex={currentSlideIndex}
                    setCurrentSlideIndex={setCurrentSlideIndex}
                />
            </div>
        </section>
    );
};

export default HomePage;
