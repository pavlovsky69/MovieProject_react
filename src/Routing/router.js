import {createBrowserRouter} from "react-router-dom";
import {Header} from "../components/Header/Header";
import {MoviesList} from "../components/MoviesList/MoviesList";
import {AppRoutes} from "./AppRoutes";
import {MoviesPage} from "../components/MoviesList/MoviesPage/MoviesPage";
import {GenresList} from "../components/GenreBadge/GenresList/GenresList";
import {MovieInfo} from "../components/MovieInfo/MovieInfo";

const router = createBrowserRouter ([
        {
            path: AppRoutes.MAIN,
            element:<Header/>,
            children:[
                {
                    path: AppRoutes.MoviesList,
                    element:<MoviesList/>,
                    children:[
                        {
                            path:AppRoutes.MoviesPage,
                            element:<MoviesPage/>
                        }
                    ]
                },
                {
                    path:'/movieInfo/:id',
                    element:<MovieInfo/>
                },
                {
                    path:AppRoutes.GenreList,
                    element:<GenresList/>
                }
            ]

        }
    ]
)
export {router}