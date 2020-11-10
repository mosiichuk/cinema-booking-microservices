import React, {useEffect, useState} from 'react';
import {Container, Col} from "react-bootstrap";
import classes from "containers/CommingSoonPage/ComingSoonPage.module.sass";
import Row from "react-bootstrap/Row";
import {Link} from "react-router-dom";

const ComingSoonPage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`/movies`)
            .then(data => data.json())
            .then(movies => {
                const moviesForDate = new Map();

                movies.forEach(movie => {
                    const currentMoviesForDate = moviesForDate.get(movie.releaseDate);
                    currentMoviesForDate
                        ? moviesForDate.set(movie.releaseDate, [...currentMoviesForDate, movie])
                        : moviesForDate.set(movie.releaseDate, [movie]);
                });

                setMovies(moviesForDate);
            });
    }, []);

    console.log(movies);

    return (
        <div className={classes.ComingSoonSection} id="soon">
            <Container fluid>
                <Row className={classes.Header}>
                    <div className="col text-center">
                        <h3>Soon on screens</h3>
                        <p>In the nearest theatres</p>
                    </div>
                </Row>

                {Array.from(movies).map(([date, moviesList]) => {
                    const parsedDate = new Date(Date.parse(date));
                    const formattedDate = parsedDate.toLocaleString('en-US', { day: '2-digit', month: 'long' });
                    const formattedDay = parsedDate.toLocaleString('en-US', { weekday: 'long'});
                    return (
                        <Row className={classes.Session} key={date}>
                            <Col className="col-12 col-lg-2">
                                <h3 className={classes.SessionDate}>{formattedDate}</h3>
                                <p className={classes.SessionDay}>{formattedDay}</p>
                            </Col>
                            <div className={["col-12", "col-lg-10", classes.MoviesRow].join(" ")}>
                                {moviesList.map(movie => {
                                    return (
                                        <Link to={`/movies/${movie.id}`} key={movie.id}>
                                            <div className={classes.MovieCard} key={movie.id}>
                                                <img src={movie.img} alt={movie.name} className={classes.MoviePoster}/>
                                                <p>{movie.name}</p>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </Row>
                    )
                })}
            </Container>
        </div>
    );
};

export default ComingSoonPage;
