// route.js
import {createBrowserRouter} from 'react-router-dom';
import Friends from './components/Friends';
import Dashboard from './components/Dashboard';
import Master from './components/Master';
import CategoryList from './pages/categories/index';
import Signin from './pages/authentication/Signin';
import Signup from './pages/authentication/Signup';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Master />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: '/friends',
        element: <Friends />,
      },
      {
        path: '/categories',
        element: <CategoryList />,
      },
    ],
  },
  {
    path: '/login',
    element: <Signin />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);

export default router;
