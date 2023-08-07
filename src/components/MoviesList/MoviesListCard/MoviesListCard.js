
import style from './MovieListCard.module.scss';
import {useNavigate} from "react-router-dom";
import {urls} from "../../../constance/urls";



const MoviesListCard = ({movie}) => {
    const {id, title, backdrop_path, genre_ids, popularity, release_date, vote_average} = movie;
    // const idGenre=genre_ids.map(genre=>genre)
    const navigate =useNavigate();


    return (
        <div className={style.MAIN} onClick={()=>navigate('/movieInfo/'+(id))}>
            <div className={style.mainBlock}>
                <p>{title}</p>
                <p>id: {id}</p>
                {/*<p>Genre: {genre_ids}</p>*/}
                {/*<p>Genre: {genre_ids==='35'?'Comedy':'1'}</p>*/}
                <p>popularity: {popularity}</p>
                <p>release date: {release_date}</p>
                <p>vote average: {vote_average}</p>

                {/*<NavLink to={AppRoutes.MovieInfo}> More information</NavLink>*/}

                <img className={style.imagePoster} src={urls.moviesPoster.base+backdrop_path} alt="image" width="400px"/>
            </div>

        </div>
    );
};
export {MoviesListCard};