import {Header} from "../components/Header/Header";
import {SearchMovie} from "../components/SeacrhMovie/SearchMovie";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {searchActions} from "../redux/slices/searchSlice";
import style from "./SearchPage.module.css"
import {MovieInfo} from "../components/MovieInfo/MovieInfo";

const SearchPage = () => {
    const {searchList} = useSelector (state => state.search)
    const {searchCheck} = useSelector (state => state.searchCheck)
    const dispatch = useDispatch ()
    const {query} = useParams ();

    useEffect (() => {
        dispatch (searchActions.getByQuery ({query}))
    }, [query]);


    // const search = async ({query}) => {
    //     await dispatch(searchActions.getByQuery({query}))
    //     reset ()
    // }


    return (
        <div>
            <Header/>
            <div className={style.MainBlockSearch}>
                {/*{searchCheck ? true : <SearchMovie/>}*/}
                <div className={style.TitleSearchQuery}><h2>All results at your search: "{query}"</h2></div>

                <div className={style.MovieListHead}>
                    {<div className={style.MoviesCard}>
                        {searchList.map (movie => <MovieInfo key={movie.id} movie={movie}/>)}
                    </div>}
                </div>
            </div>
        </div>
    );
};

export {SearchPage};