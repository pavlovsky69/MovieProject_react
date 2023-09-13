import {createBrowserRouter, Navigate} from "react-router-dom";
import {AppRoutes} from "./AppRoutes";

import {MainPage} from "../pages/MainPage";
import {MoviesListPage} from "../pages/MoviesListPage";
import {GenresPage} from "../pages/GenresPage";


const router = createBrowserRouter ([
        {
            path: AppRoutes.MainUrl,
            element: <MainPage/>,
            children: [
                {
                    index: true,
                    element: <Navigate to={AppRoutes.MoviesListUrl}/>
                },
                {
                    path:AppRoutes.MoviesListUrl,
                    element:<MoviesListPage/>
                },
                {
                    path:AppRoutes.GenreListUrl,
                    element:<GenresPage/>
                }
            ]

        }
    ]
)
export {router}