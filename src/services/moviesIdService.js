import {apiService} from "./apiService";
import {urls} from "../constants/urls";


const moviesIdService = {
    getByIds:(ids)=>apiService.get(urls.moviesList.byId(ids))}

export {
    moviesIdService
}

