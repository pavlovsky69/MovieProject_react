import style from './OneGenre.module.css'
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../Routing/AppRoutes";
import {GenresFindPage} from "../../pages/GenresFindPage";

const OneGenre = ({genre}) => {
    const {id, name} = genre;
    // const {page}=useParams();
    const navigate = useNavigate ();
    return (
        <div className={style.MainGenreBlock} onClick={() => navigate (AppRoutes.GenreFind + (id))}>

            <div className={style.GenreTitleBlock}>
                <h1 className={style.TitleGenre}>{name}</h1>
            </div>
        </div>
    )
        ;
};

export {OneGenre};