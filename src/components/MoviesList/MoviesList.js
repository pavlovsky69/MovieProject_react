import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {moviesListActions} from "../../redux/slices/moviesListSlice";
import {MovieInfo} from "../MovieInfo/MovieInfo";

import style from "../MoviesList/MoviesList.module.scss"
import {useSearchParams} from "react-router-dom";


const MoviesList = () => {
    const dispatch = useDispatch ();
    const {moviesList} = useSelector (state => state.moviesList);

    const [query, setQuery] = useSearchParams ({page: '1'})
    const page = +query.get ('page')


    const nextPage = () => {
        setQuery (prev => {
            prev.set ('page', (+prev.get ('page') + 1).toString ())
            return prev;
        })
    }
    const prevPage = () => {
        setQuery (prev => {
            prev.set ('page', (+prev.get ('page') - 1).toString ())
            return prev;
        })
    }

    useEffect (() => {
        dispatch (moviesListActions.getAll({page}))
    },[page]);

    return (
        <div className={style.MovieListHead}>
            <div className={style.MoviesCard}>
                {moviesList.map (movie => <MovieInfo key={movie.id} movie={movie}/>)}
            </div>
            <div className={style.ButtonPage}>

                <button disabled={page === 1} className={style.ButtonMinus} onClick={() => prevPage ()}>Prev Page
                </button>
                <button disabled={page === 500} className={style.ButtonPlus} onClick={() => nextPage ()}>Next Page
                </button>
            </div>
        </div>
    );
};

export {MoviesList};