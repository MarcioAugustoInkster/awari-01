import { Outlet, createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Login from '../pages/account/Login';
import Users from '../pages/user/Users';
import Details from '../pages/user/Details';
import Pokemon from '../pages/pokemon/Pokemon';

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: (<Outlet />),
    children: [
      { path: '/', element: <Home /> },
      { path: '/conta/login', element: <Login /> },
      { path: '/usuarios', element: <Users /> },
      { path: '/usuarios/detalhes/:codigo', element: <Details /> },
      { path: '/pokemon', element: <Pokemon /> },
    ],
    errorElement: <NotFound />
  }
]);

export default routerConfig;
