import {urls} from "../../constants/urls";
import style from "../MovieInfo/MovieInfo.module.scss"
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../Routing/AppRoutes";


const MovieInfo = ({movie}) => {
    const {id, title, poster_path} = movie;
    const navigate = useNavigate ();

    return (
        <div className={style.OneMoviesCard} onClick={() => navigate (AppRoutes.movie + (id))}>
            <img className={style.PosterImage} src={urls.moviesPoster.base + movie.poster_path} alt="logo"/>
            <div className={style.MovieTitle}>{title}</div>

        </div>
    );
};

export {MovieInfo};