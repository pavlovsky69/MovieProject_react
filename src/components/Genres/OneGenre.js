import style from './OneGenre.module.css'

const OneGenre = ({genre}) => {
    const {id, name} = genre
    return (
        <div className={style.MainGenreBlock}>
            <div className={style.GenreTitleBlock}>
                <h1 className={style.TitleGenre}>{name}</h1>
            </div>
        </div>
    );
};

export {OneGenre};