import {Header} from "../components/Header/Header";
import {SearchMovie} from "../components/SeacrhMovie/SearchMovie";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {searchActions} from "../redux/slices/searchSlice";
import style from "../components/SeacrhMovie/SeachMovie.module.css";
import {MovieInfo} from "../components/MovieInfo/MovieInfo";

const SearchPage = () => {
    const {searchList} = useSelector (state => state.search)
    const {searchCheck}=useSelector(state => state.searchCheck)
    const dispatch=useDispatch()
    const {query} = useParams ();

    useEffect (() => {
        dispatch (searchActions.getByQuery({query}))
    }, [query]);


    // const search = async ({query}) => {
    //     await dispatch(searchActions.getByQuery({query}))
    //     reset ()
    // }


    return (
        <div>
            <Header/>

            {searchCheck ? true: <SearchMovie/>}
            <div className={style.TitleSearchQuery}><h3>All results at your search: "{query}"</h3></div>


            <div>
                {<div className={style.MoviesCard}>
                    {searchList.map (movie => <MovieInfo key={movie.id} movie={movie}/>)}
                </div>}
            </div>



        </div>
    );
};

export {SearchPage};