import {Header} from "../components/Header/Header";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../redux/slices/OneMovieSlice";
import {urls} from "../constants/urls";


const MoviePage = () => {
    const {id} = useParams ()
    const dispatch = useDispatch ();
    const {movie} = useSelector (state => state.Movie);
    const {isLoading} = useSelector (state => state.Movie)
    useEffect (() => {
        dispatch (movieActions.getId (id));
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
