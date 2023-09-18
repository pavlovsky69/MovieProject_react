import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import style from './Header.module.scss'
import {AppRoutes} from "../../Routing/AppRoutes";
import {Switch} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {themeActions} from "../../redux/slices/themeSlice";

const Header = () => {
    const {themeCheck}  = useSelector(state => state.theme);
    const dispatch = useDispatch();

    return (
        <div>
            <div className={style.themeSwitcher}>
                <Switch className={style.switch} defaultChecked={themeCheck} onChange={()=>dispatch(themeActions.changeThemeCheck())}/>
            </div>
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