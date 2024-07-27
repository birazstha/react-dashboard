// route.js
import {createBrowserRouter} from 'react-router-dom';
import Friends from './components/Friends';
import Dashboard from './components/Dashboard';
import Master from './pages/Master';
import CategoryList from './pages/categories/index';
import Signin, {loginAction} from './pages/authentication/Signin';
import Signup, {signupAction} from './pages/authentication/Signup';

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
    action: loginAction,
  },
  {
    path: '/signup',
    element: <Signup />,
    // action: signupAction,
  },
]);

export default router;
