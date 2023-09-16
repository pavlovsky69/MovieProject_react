import {Header} from "../components/Header/Header";
import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../redux/slices/OneMovieSlice";
import {urls} from "../constants/urls";


const MoviePage = () => {
    const {id} = useParams ()
    const dispatch = useDispatch ();
    const {movie} = useSelector (state => state.Movie);
    const {isLoading} = useSelector (state => state.Movie)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect (() => {
        dispatch (movieActions.getId (id));
        // dispatch (movieActions.getId (id))
    }, []);


    return (
        <div>
            <Header/>
            {isLoading ? <h1>Loading.......</h1> : <div>
                <p>{movie.title}</p>
                <p>Бюджет: {movie.budget}</p>
                <div> Жанр:
                    {movie.genres?.map ((genre) => <p key={genre.id}> {genre.name}</p>)}
                </div>
                <div>
                    <img src={urls.moviesPoster.base + movie.backdrop_path} alt="logo"/>
                </div>
                <p></p>
                <p></p>
            </div>}

        </div>
    );
};

export {MoviePage};


// import {Header} from "../components/Header/Header";
// import {useEffect} from "react";
// import {moviesService} from "../services/moviesService";
// import { useParams} from "react-router-dom";
//
// const MoviePage = () => {
//     const {id}=useParams()
//
//     useEffect (() => {
//         moviesService.getById(id)
//     }, []);
//
//     return (
//         <div>
//             <Header/>
//             OneMovie12
//         </div>
//     );
// };
//
// export {MoviePage};


//
// import {Header} from "../components/Header/Header";
// import {useEffect} from "react";
// import {moviesService} from "../services/moviesService";
// import { useParams} from "react-router-dom";
// import {useDispatch, useSelector} from "react-redux";
// import {movieActions} from "../redux/slices/OneMovieSlice";
//
// const MoviePage = () => {
//     const {id}=useParams()
//     const dispatch=useDispatch();
//     const {OneMovie} = useSelector (state => state.OneMovie);
//
//     useEffect (() => {
//         dispatch (movieActions.getId(id))
//         // dispatch (moviesListActions.getAll ({page}))
//     }, []);
//
//     return (
//         <div>
//             <Header/>
//             OneMovie12
//             <div>
//                 {}
//             </div>
//         </div>
//     );
// };
//
// export {MoviePage};


// useEffect (() => {
//     const myData = async () => {
//         await dispatch (movieActions.getId (id));
//     }
//     myData ()
//     // dispatch (movieActions.getId (id))
// }, []);


