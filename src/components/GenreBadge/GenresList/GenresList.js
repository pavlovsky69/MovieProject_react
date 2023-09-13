import React, {useEffect, useState} from 'react';
import {apiKey} from "../../../constants/apiKey";
import {GenreListCard} from "./GenreListCard/GenreListCard";

const GenresList = () => {
    const [genres, setGenres]=useState([])

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: apiKey
        }
    };

    useEffect (() => {
        // fetch (baseUrl + urls.moviesGenre, options)
        fetch('https://api.themoviedb.org/3/genre/movie/list', options)
            .then (response => response.json ())
            .then (response => setGenres(response.genres))
            // .then (response => setGenres(response))

            .catch (err => console.error (err));


    }, [])

    return (
        <div>
            {genres.map(genre=><GenreListCard key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {GenresList};