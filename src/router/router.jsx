import { createBrowserRouter } from 'react-router';
import Layout from '../components/layouts/Layout';
import Homepage from '../views/Homepage';
import routes from './routes';
import SearchPage from '../views/SearchPage';
import GenrePage from '../views/GenrePage';
import AuthLayout from '../components/layouts/AuthLayout';
import Register from '../views/Auth/Register';
import Login from '../views/Auth/Login';
import { getAllGamesLoader , getFilteredGames , getAllGenres ,getFilteredByGenres} from '../router/loaders';

const router = createBrowserRouter ([
    {
        path : routes.home,
        Component : Layout,
        loader : getAllGenres,
        children : [
           {
             index : true,
             Component : Homepage,
             loader : getAllGamesLoader
           },
           {
            path : routes.search,
            Component : SearchPage,
            loader : getFilteredGames
           },
           {
            path : routes.genre,
            Component : GenrePage,
            loader : getFilteredByGenres
           },
        ]
    } ,

     {
            path : '/auth',
            Component : AuthLayout,
            children : [
                  {
            path : routes.register,
            Component : Register
           },
           {
            path : routes.login,
            Component : Login
           }
            ]
         }



]);

export default router;