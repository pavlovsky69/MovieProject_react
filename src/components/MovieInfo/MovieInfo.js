import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {apiKey} from "../../constance/apiKey";
import style from './MovieInfo.module.scss'
import {urls} from "../../constance/urls";

const MovieInfo = () => {
    const params = useParams ()
    const [data, setData] = useState ({})
    const [genres, setGenres] = useState ([])
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
        // fetch (baseUrl + urls.moviesList.base, options)
        fetch (`https://api.themoviedb.org/3/movie/${params.id}`, options)
            .then (response => response.json ())
            .then (response => {
                setData (response)
                setGenres (response.genres)
            })
            .catch (err => console.error (err));
    }, [])

    return (
        <div>
            <p>Title: {data.title}</p>
            <p>id: {data.id}</p>
            <div className={style.genres}> Genres: {genres.map (
                (item) => <p key={item.id} className={style.oneGenre}>{item.name},</p>)}</div>
            <div>Budget: {data.budget}</div>
            <p>Popularity: {data.popularity}</p>
            <p>Release date: {data.release_date}</p>
            <p>Vote average: {data.vote_average}</p>
            <p>Status: {data.status}</p>
            <img src={urls.moviesPoster.base+data.backdrop_path} alt="logo"/>
            {/*/nHf61UzkfFno5X1ofIhugCPus2R.jpg*/}
        </div>
    );
};

export {MovieInfo};