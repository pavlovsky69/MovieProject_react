import {urls} from "../../constants/urls";
import style from "../MovieInfo/MovieInfo.module.scss"
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../Routing/AppRoutes";


const MovieInfo = ({movie}) => {
    const {id, title, poster_path} = movie;
    const navigate = useNavigate ();

    return (
        <div className={style.OneMoviesCard} onClick={() => navigate (AppRoutes.OneMovie + (id))}>
            <img className={style.PosterImage} src={urls.moviesPoster.base + movie.poster_path} alt="logo"/>
            {/*<div>{id}</div>*/}
            <div className={style.MovieTitle}>{title}</div>

        </div>
    );
};

export {MovieInfo};


// const params = useParams ()
// const [data, setData] = useState ({})
// const [genres, setGenres] = useState ([])
// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: apiKey
//     },
//     params: {
//         api_key: '388cefb94016e91a085e0dfd274a8ea5'
//     }
// };
//
// useEffect (() => {
//     // fetch (baseUrl + urls.moviesList.base, options)
//     fetch (`https://api.themoviedb.org/3/movie/${params.id}`, options)
//         .then (response => response.json ())
//         .then (response => {
//             setData (response)
//             setGenres (response.genres)
//         })
//         .catch (err => console.error (err));
// }, [])

// return (
//     <div>
//         <p>Title: {data.title}</p>
//         <p>id: {data.id}</p>
//         <div className={style.genres}> Genres: {genres.map (
//             (item) => <p key={item.id} className={style.oneGenre}>{item.name},</p>)}</div>
//         <div>Budget: {data.budget}</div>
//         <p>Popularity: {data.popularity}</p>
//         <p>Release date: {data.release_date}</p>
//         <p>Vote average: {data.vote_average}</p>
//         <p>Status: {data.status}</p>
//         <img src={urls.moviesPoster.base+data.backdrop_path} alt="logo"/>
//         {/*/nHf61UzkfFno5X1ofIhugCPus2R.jpg*/}
//     </div>
// );
// };
//
// export {MovieInfo};