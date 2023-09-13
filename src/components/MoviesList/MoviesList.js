import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {moviesListActions} from "../../redux/slices/moviesListSlice";
import {MovieInfo} from "../MovieInfo/MovieInfo";

import style from "../MoviesList/MoviesList.module.scss"


const MoviesList = () => {
    const dispatch = useDispatch ();
    const {moviesList} = useSelector (state => state.moviesList);

    const [count, setCount] = useState (1)
    const minus = () => {
        setCount (count - 1)
        if (count - 1 === 0) {
            return setCount (1)
        }
    }

    const plus = () => {
        setCount (count + 1)
        if (count + 1 === 500) {
            return setCount (500)
        }
    }

    useEffect (() => {
        dispatch (moviesListActions.getAll ({page: count}))
    }, [count]);


    return (
        <div className={style.MovieListHead}>
            <div className={style.MoviesCard}>
                {moviesList.map (movie => <MovieInfo key={movie.id} movie={movie}/>)}
            </div>
            <div className={style.ButtonPage}>
                <button onClick={() => plus ()}>next page</button>
                <button onClick={() => minus ()}>prev page</button>
            </div>
        </div>
    );
};

export {MoviesList};


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
//             api_key: '388cefb94016e91a085e0dfd274a8ea5'
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


// const [count, setCount]=useState(1)
// const minus = () => {
//     setCount (count - 1)
//     if (count - 1 === 0) {
//         return setCount (1)}}
//
// const plus =()=>{
//     setCount (count + 1)
// }
//
// useEffect (() => {
//     dispatch(moviesListActions.getAll({page:count}))
// }, [count]);