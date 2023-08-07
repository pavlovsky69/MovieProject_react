import React, {useEffect, useState} from 'react';
import {MoviesListCard} from "./MoviesListCard/MoviesListCard";
import {apiKey} from "../../constance/apiKey";
import {baseUrl, urls} from "../../constance/urls";
import style from './MoviesList.module.scss'

const MoviesList = () => {

    const [count, setCount] = useState (1)
    const minus = () => {
        setCount (count - 1)
        if (count - 1 === 0) {
            return setCount (1)
        }
    };
    const plus = () => {
        setCount (count + 1)
    };

    const [movies, setMovies] = useState ([])
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: apiKey
        },
        params: {
            api_key: '388cefb94016e91a085e0dfd274a8ea5'
        }
    };


    useEffect (() => {
        fetch (baseUrl + urls.moviesList.byId (count), options)
            .then (response => response.json ())
            .then (response => setMovies (response.results))
            .catch (err => console.error (err));
    }, [count])

    return (
        <div className={style.Head}>
            <div className={style.MoviesMain}>
                {movies.map (movie => <MoviesListCard key={movie.id} movie={movie}/>)}

            </div>
            <div className={style.button_container}>
                <button className={style.button} onClick={() => minus (count)}>PREVIOUS PAGE</button>
                <button className={style.button} onClick={() => plus (count)}>NEXT PAGE</button>
            </div>
        </div>
    );
};

export {MoviesList};