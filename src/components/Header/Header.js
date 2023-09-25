import React from 'react';
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import style from './Header.module.scss'
import {AppRoutes} from "../../Routing/AppRoutes";
import {Switch} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {themeActions} from "../../redux/slices/themeSlice";
import userLogo from './icons8-user-50.png'

const Header = () => {
    const {themeCheck} = useSelector (state => state.theme);
    const dispatch = useDispatch ();
    const navigate = useNavigate();


    return (
        <div className={style.HeaderMain}>
            <div className={style.headerBar}>
                <div className={style.titleClass} onClick={()=>navigate(AppRoutes.MainUrl)}>
                    <h1 className={style.titleH1}>The MovieDB</h1>
                </div>
                <NavLink className={style.button} to={AppRoutes.MoviesListUrl}>Movies</NavLink>
                <NavLink className={style.button} to={AppRoutes.GenreListUrl}>Genres</NavLink>
                <NavLink className={style.button} to={AppRoutes.SearchPage}>Search</NavLink>
                <div className={style.themeSwitcher}>
                    <Switch className={style.switch} defaultChecked={themeCheck}
                            onChange={() => dispatch (themeActions.changeThemeCheck ())}/>
                    {themeCheck ? <p className={style.titleTheme}>Dark Theme</p> : <p className={style.titleTheme}>Light Theme</p>}
                </div>
                <div className={style.logoUser}>
                    <img className={style.imageUser} src={userLogo} alt="userLogo"/>
                    <h5 className={style.userTitle}>User</h5>
                </div>
            </div>
            {/*<Outlet/>*/}
        </div>
    );
};

export {Header};




// {
//     isLoading && (<Box sx={{ width: '100%', height: '10%'}}>
//         <LinearProgress />
//     </Box>)
// }



