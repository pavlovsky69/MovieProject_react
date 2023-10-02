import {useForm} from "react-hook-form";
import style from './SeachMovie.module.css'
import {useDispatch, useSelector} from "react-redux";
import {searchActions} from "../../redux/slices/searchSlice";
import {MovieInfo} from "../MovieInfo/MovieInfo";
import React from "react";
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../Routing/AppRoutes";

const SearchMovie = () => {
    const navigate=useNavigate();
    const dispatch = useDispatch ();
    // const {searchList} = useSelector (state => state.search)
    const {register, handleSubmit, setValue, reset} = useForm ();


    // const search = async ({query}) => {
    //     await dispatch(searchActions.getByQuery({query}))
    //     reset ()
    // }

    const search = ({query}) => {
        navigate ('/search/' + (query))
        reset ()
    }



    return (
        <div className={style.MainBox}>
            <form className={style.MyForm} onSubmit={handleSubmit (search)}>
                <input className={style.Input} type="text"
                       placeholder={'Type your query to search movie'} {...register ('query')}/>
                <button>search</button>
            </form>
        </div>
    );
};

export {SearchMovie};










// useEffect (() => {
//     searchService.getByQuery({query})
// }, []);



// const search = async ({query})=>{
//     await searchService.getByQuery({query})
//     reset()
// }