import {useForm, useFormState} from "react-hook-form";
import style from './SeachMovie.module.css'
import {useDispatch, useSelector} from "react-redux";
import {searchActions} from "../../redux/slices/searchSlice";
import {MovieInfo} from "../MovieInfo/MovieInfo";
import React from "react";
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../Routing/AppRoutes";
import {isDisabled} from "@testing-library/user-event/dist/utils";

const SearchMovie = () => {
    const navigate=useNavigate();
    const dispatch = useDispatch ();
    const {searchCheck}=useSelector(state => state.searchCheck)
    // const {searchList} = useSelector (state => state.search)
    const {register, handleSubmit, formState:{errors, isValid}, reset} = useForm (
    );


    // const search = async ({query}) => {
    //     await dispatch(searchActions.getByQuery({query}))
    //     reset ()
    // }

    const search = ({query}) => {
        navigate ('/search/' + (query))
        reset ()
        dispatch (searchActions.changeSearchCheck())

    }



    return (
        <div className={style.MainBox}>
            <div className={style.SmallBox}>
            <form className={style.MyForm} onSubmit={handleSubmit (search)}>
                <input className={style.Input} type="text"
                       placeholder={'Type your query to search movie'} {...register ('query', {required:true, minLength:1})}/>
                <button  disabled={!isValid} type={"submit"} className={style.buttonSubmit}>search</button>
            </form>
            </div>
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