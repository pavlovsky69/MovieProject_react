import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import style from './Header.module.scss'
import {AppRoutes} from "../../Routing/AppRoutes";

const Header = () => {
    return (
        <div>
            <div className={style.headerBar}>
                <NavLink className={style.button} to={AppRoutes.MAIN}>MAIN PAGE</NavLink>
                <NavLink className={style.button} to={AppRoutes.MoviesList}>GET MOVIES</NavLink>
                <NavLink className={style.button} to={AppRoutes.GenreList}>ALL GENRES</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};

export {Header};