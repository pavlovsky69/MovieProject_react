import {Header} from "../components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {useParams, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {GenresByIdAction} from "../redux/slices/GenresByIdSlice";
import {genreService} from "../services/genreService";

const GenresFindPage = () => {

    const {id} = useParams ();
    const dispatch = useDispatch ();
    const {genresById} = useSelector (state => state.genresById)

    const [query, setQuery] = useSearchParams ({page:'2'})
    const {page} = +query.get ('page')

    useEffect (() => {
        dispatch(GenresByIdAction.getByGenre({id, page}))
    }, []);



//     const {id}=useParams();
// const [query, setQuery] = useSearchParams ({with_genres: id, page: '1'})
// // const with_genres = query.get ('with_genres')
// const page = +query.get (('page'))
//
//
//
// useEffect (() => {
//     genreService.getByGenre((id),(page))
// }, []);




    return (
        <div>
            <Header/>
            GenresFindPage
        </div>
    );
};

export {GenresFindPage};






// const {id}=useParams();
// const [query, setQuery] = useSearchParams ({with_genres: id, page: '3'})
// // const with_genres = query.get ('with_genres')
// const page = +query.get (('page'))
//
//
//
// useEffect (() => {
//     genreService.getByGenre((id),(page))
// }, []);





//     const {id}=useParams();
// const [query, setQuery] = useSearchParams ({with_genres: id, page: '3'})
// // const with_genres = query.get ('with_genres')
// const page = +query.get (('page'))
//
//
//
// useEffect (() => {
//     genreService.getByGenre((id),(page))
// }, []);