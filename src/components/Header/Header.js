import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import style from './Header.module.scss'
import {AppRoutes} from "../../Routing/AppRoutes";

const Header = () => {

    return (
        <div>
            <div className={style.headerBar}>
                <NavLink className={style.button} to={AppRoutes.MoviesListUrl}>Movies</NavLink>
                <NavLink className={style.button} to={AppRoutes.GenreListUrl}>Genres</NavLink>
                <NavLink className={style.button} to={AppRoutes.SearchPage}>Search</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};

export {Header};