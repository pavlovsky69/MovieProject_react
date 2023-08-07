import React, {useEffect, useState} from 'react';
import {apiKey} from "../../../constance/apiKey";
import {GenreListCard} from "./GenreListCard/GenreListCard";

const GenresList = () => {
    const [genres, setGenres]=useState([])

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