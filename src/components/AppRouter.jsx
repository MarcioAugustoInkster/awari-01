import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Login from '../pages/account/Login';
import Users from '../pages/user/Users';
import Details from '../pages/user/Details';
import Pokemon from '../pages/pokemon/Pokemon';
import App from '../App';

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: (<App />),
    children: [
      { path: '/', element: <Home /> },
      { path: '/home', element: <Home /> },
      { path: '/conta/login', element: <Login /> },
      { path: '/usuarios', element: <Users /> },
      { path: '/usuario/detalhes/:codigo', element: <Details /> },
      { path: '/pokemon', element: <Pokemon /> },
    ],
    errorElement: <NotFound />
  }
]);

export default routerConfig;
