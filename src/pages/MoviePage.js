
import {Header} from "../components/Header/Header";
import {useEffect} from "react";
import {moviesService} from "../services/moviesService";
import { useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../redux/slices/OneMovieSlice";

const MoviePage = () => {
    const {id}=useParams()
const dispatch=useDispatch();
const {OneMovie} = useSelector (state => state.OneMovie);

useEffect (() => {
    dispatch (movieActions.getId(id))
    // dispatch (moviesListActions.getAll ({page}))
}, []);

    return (
        <div>
            <Header/>
            OneMovie12
            <div>
                {console.log(OneMovie)}
            </div>
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







