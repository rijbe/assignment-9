import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Pages/Home/Home.jsx';
import Root from './Components/Root/Root.jsx';
import Header from './Components/Pages/Header/Header.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import Provider from './Provider/Provider.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import Contactus from './Components/Contactus/Contactus.jsx';
import Profile from './Components/Pages/Profile/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <PrivateRoute><Home></Home></PrivateRoute>
      },
      {
        path: '/header',
        element: <Header></Header>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/contact',
        element: <Contactus></Contactus>
      }
      ,{
        path: '/profile',
        element: <Profile></Profile>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
    <RouterProvider router={router} />
    </Provider> 
  </React.StrictMode>,
)
