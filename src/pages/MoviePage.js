import {Header} from "../components/Header/Header";
import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../redux/slices/OneMovieSlice";
import {urls} from "../constants/urls";
import {Box, LinearProgress} from "@mui/material";
import {AppRoutes} from "../Routing/AppRoutes";
import style from './MoviePage.module.css'
import ReactStars from "react-rating-stars-component";


const MoviePage = () => {
    const {id} = useParams ()
    const dispatch = useDispatch ();
    const navigate = useNavigate ();
    const {movie} = useSelector (state => state.Movie);
    const {isLoading} = useSelector (state => state.Movie)
    useEffect (() => {
        dispatch (movieActions.getId (id));
    }, []);


    return (
        <div className={style.MainBox}>
            <Header/>
            {isLoading ? <Box sx={{width: '100%'}} color="primary">
                    <LinearProgress/>
                </Box> :
                <div>
                    <div className={style.ContainerBox}>
                        <div className={style.ImagePoster}>
                            <img src={urls.moviesPoster.base + movie.backdrop_path} className={style.Poster}
                                 alt="logo"/>
                        </div>


                        <div className={style.TextContainerBox}>
                            <h1>{movie.title}</h1>
                            <div className={style.GenreTitleBlock}>
                                <div className={style.GenreTitle}>
                                    <h3 className={style.boldTextP}>Genres:</h3>
                                    {movie.genres?.map ((genre) => <h4 className={style.GenreTitleP} key={genre.id}
                                                                       onClick={() => navigate (
                                                                           AppRoutes.GenreFind + (genre.id))}>{genre.name}</h4>)}
                                </div>
                            </div>
                            <div className={style.Information}>
                                <p className={style.smallInfo}>Release date: {movie.release_date}</p>
                                <p className={style.smallInfo}>Duration: {movie.runtime} min</p>
                                {movie.budget != 0 && <p className={style.smallInfo}>Budget: {movie.budget}$</p>}
                                {movie.revenue != 0 && <p className={style.smallInfo}>Revenue: {movie.revenue}$</p>}
                            </div>
                            <div className={style.RatingBox}><p className={style.RatingName}>Rating:</p>
                                <ReactStars
                                    count={10}
                                    value={movie.vote_average}
                                    size={25}
                                    activeColor="#ffd700"
                                    isHalf={true}
                                    edit={false}
                                    classNames={style.Stars}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={style.OverviewBlock}>
                        <p>Overview:</p>
                        <p className={style.OverviewText}>{movie.overview}</p>
                    </div>
                </div>}
        </div>
    );
};

export {MoviePage};
