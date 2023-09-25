import {Header} from "../components/Header/Header";
import {MoviesList} from "../components/MoviesList/MoviesList";
import React from "react";

const MoviesListPage = () => {

    return (
        <div>
            <Header/>
            <MoviesList/>
        </div>
    );
};

export {MoviesListPage};