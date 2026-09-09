import { createBrowserRouter } from 'react-router';
import Layout from '../components/Layout';
import Homepage from '../views/Homepage';
import routes from './routes';
import SearchPage from '../views/SearchPage';
import GenrePage from '../views/GenrePage';
import { getAllGamesLoader , getFilteredGames , getAllGenres ,getFilteredByGenres} from '../router/loaders';

const router = createBrowserRouter ([
    {
        path : routes.home,
        Component : Layout,
        loader : getAllGenres,
        children : [
           {
             path : routes.home,
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
           }
        ]
    }
]);

export default router;