import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import About from './View/About/About';
import Contact from './View/Contact/Contact';
import Login from './View/Login/Login';
import Signup from './View/Signup/Signup';
import Home from './View/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([

  {
    'path': "/",
    'element': <Home/>
  },
  {
    'path': "/about",
    'element': <About/>
  },
  {
    'path': "/contact",
    'element': <Contact/>
  },
  {
    'path': "/login",
    'element': <Login/>
  },
  {
    'path': "/signup",
    'element': <Signup/>
  },


])
root.render(
  <>

   <RouterProvider router={router}/>
   </>

);


