import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
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
        dispatch (moviesListActions.getAll ({page}))
    }, [page]);

    return (
        <div className={style.MovieListHead}>
            <div className={style.MoviesCard}>
                {moviesList.map (movie => <MovieInfo key={movie.id} movie={movie}/>)}
            </div>
            <div className={style.ButtonPage}>

                <button disabled={page===1} className={style.ButtonPlus} onClick={() => prevPage ()}>prev page</button>
                <button disabled={page===500} className={style.ButtonMinus} onClick={() => nextPage ()}>next page</button>


            </div>
        </div>
    );
};

export {MoviesList};









// const prevPage = () => {
//     setQuery (prev => {
//         prev.set ('page', (+prev.get ('page') - 1).toString ())
//         return prev;
//     })
// }





// const MoviesList = () => {
//
//     const [count, setCount] = useState (1)
//     const minus = () => {
//         setCount (count - 1)
//         if (count - 1 === 0) {
//             return setCount (1)
//         }
//     };
//     const plus = () => {
//         setCount (count + 1)
//     };
//
//     const [movies, setMovies] = useState ([])
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: apiKey
//         },
//         params: {
//
//         }
//     };
//
//
//     useEffect (() => {
//         fetch (baseURL + urls.moviesList.byId (count), options)
//             .then (response => response.json ())
//             .then (response => setMovies (response.results))
//             .catch (err => console.error (err));
//     }, [count])
//
//     return (
//         <div className={style.Head}>
//             <div className={style.MoviesMain}>
//                 {movies.map (movie => <MoviesListCard key={movie.id} movie={movie}/>)}
//
//             </div>
//             <div className={style.button_container}>
//                 <button className={style.button} onClick={() => minus (count)}>PREVIOUS PAGE</button>
//                 <button className={style.button} onClick={() => plus (count)}>NEXT PAGE</button>
//             </div>
//         </div>
//     );
// };
//
// export {MoviesList};


// const dispatch = useDispatch ();
// const {moviesList} = useSelector (state => state.moviesList);
//
// const [count, setCount] = useState (1)
// const minus = () => {
//     setCount (count - 1)
//     if (count - 1 === 0) {
//         return setCount (1)
//     }
// }
//
// const plus = () => {
//     setCount (count + 1)
//     if (count + 1 === 500) {
//         return setCount (500)
//     }
// }
//
// useEffect (() => {
//     dispatch (moviesListActions.getAll({page: count}))
// }, [count]);