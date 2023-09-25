import {Header} from "../components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genresListAction} from "../redux/slices/GenreListSlice";
import {OneGenre} from "../components/Genres/OneGenre";
import style from './GenresPage.module.css'


const GenresPage = () => {
    const dispatch = useDispatch ();
    const {genresList} = useSelector (state => state.genresList)


    useEffect (() => {
        dispatch (genresListAction.getAllGenres ())
    }, []);

    return (
        <div>
            <Header/>
            <div className={style.GenresContainer}>
                <div className={style.GenresListBlock}>
                    {genresList.map (genre => <OneGenre key={genre.id} genre={genre}/>)}
                </div>
            </div>
        </div>
    );
};

export {GenresPage};


//
// const [query, setQuery] = useSearchParams ({with_genres: '37', page:'1'})
// const with_genres = +query.get ('with_genres')
// const page = +query.get(('page'))
//
//
//
// useEffect (() => {
//     genreService.getByGenre ({with_genres}, {page})
// }, []);