import {Header} from "../components/Header/Header";
import {MoviesList} from "../components/MoviesList/MoviesList";
import React, {useState} from "react";
import {SearchMovie} from "../components/SeacrhMovie/SearchMovie";
import {useSelector} from "react-redux";

const MoviesListPage = () => {
    const {searchCheck}=useSelector(state => state.searchCheck)
    return (
        <div>
            <Header/>
            {/*{searchCheck && <SearchMovie/>}*/}
            <MoviesList/>

        </div>
    );
};

export {MoviesListPage};