import {Header} from "../components/Header/Header";
import {MoviesList} from "../components/MoviesList/MoviesList";
import React from "react";
import {useSelector} from "react-redux";

const MoviesListPage = () => {
    return (
        <div>
            <Header/>
            <MoviesList/>
        </div>
    );
};

export {MoviesListPage};