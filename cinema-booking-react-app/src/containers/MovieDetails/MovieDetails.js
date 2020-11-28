import React, {useEffect, useState} from 'react';
import {
    useParams
} from "react-router-dom";
import {Container, Row} from "react-bootstrap";
import ReactPlayer from "react-player";
import classes from './MovieDetails.module.sass';
import playButtonIcon from 'Assets/img/play.png'
import descImg from 'Assets/img/description-img.png'
import SelectSessionSection from "containers/SelectSessionSection/SelectSessionSection";
import MoviesService from "../../api/MoviesService";

const moviesService = new MoviesService();

const MovieDetails = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState({});

    useEffect(async () => {
        const movie = await moviesService.getMovieById(id);
        setMovie(movie);
    }, []);

    return (
        <>
            <section className={classes.MovieDetails}>
                <ReactPlayer
                    className={classes.MovieTrailer}
                    url={movie.trailerUrl}
                    height={'calc(100vh - 75px)'}
                    width="100%"
                    playing
                    playIcon={<VideoPlayButton/>}
                    light={true}
                />
                <div className={classes.MovieDescriptionSection}>
                    <h2 className="text-center mb-5">{movie.name}</h2>
                    <Container fluid>
                        <Row className="justify-content-xl-end">
                            <div className=" col-12 col-xl-6">
                                <div className="d-flex">
                                    <div>
                                        <img src={descImg} alt="movie-poster"
                                             className={classes.MoviePoster}/>
                                    </div>
                                    <div className={classes.MovieDescription}>
                                        <MovieDescriptionItem title="Year" desc={movie.year}/>
                                        <MovieDescriptionItem title="Country" desc={movie.contry}/>
                                        <MovieDescriptionItem title="Language" desc={movie.language}/>
                                        <MovieDescriptionItem title="Genres" desc={movie.genres}/>
                                        <MovieDescriptionItem title="Starring" desc={movie.starring}/>
                                        <MovieDescriptionItem title="Directed by" desc={movie.director}/>
                                        <MovieDescriptionItem title="Written by" desc={movie.writtenBy}/>
                                        <MovieDescriptionItem title="Release date" desc={movie.releaseDate}/>
                                        <MovieDescriptionItem title="Running time" desc={movie.movieTiming}/>
                                        <MovieDescriptionItem title="Age limit" desc={movie.ageLimit}/>
                                    </div>
                                </div>
                            </div>
                            <div className={`col-xl-5 col-12 ${classes.Separator}`}>
                                <div className={classes.Synopsis}>
                                    <p className={`${classes.MovieDescription__title} text-center`}>
                                        Synopsis:
                                    </p>
                                    <p className={classes.SynopsisText}>
                                        {movie.synopsis}
                                    </p>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </div>
            </section>

            <SelectSessionSection movieId={id}/>
        </>
    );
}

const MovieDescriptionItem = ({title, desc}) => {
    return (
        <div className="mb-3 mb-sm-0">
            <p className={classes.MovieDescription__title}>
                {title}
            </p>
            <p className={classes.MovieDescription__desc}>
                {desc}
            </p>
        </div>
    );
}

const VideoPlayButton = () => {
    return (
        <div
            className={classes.PlayButton}>
            <img src={playButtonIcon} alt="play" className={classes.PlayIcon}/>
        </div>
    );
}

export default MovieDetails;
