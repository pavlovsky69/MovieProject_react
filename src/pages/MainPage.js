import {Outlet} from "react-router-dom";
import style from './MainPage.module.css'
import {useSelector} from "react-redux";
import {useState} from "react";


const MainPage = () => {
    const {themeCheck} = useSelector(state => state.theme);
    return (
        <div className={themeCheck? style.white:style.black}>
            <Outlet/>
        </div>
    );
};

export {MainPage};