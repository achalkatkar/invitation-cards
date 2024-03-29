import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Navbar from './Component/Navbar/Navbar'

import About from './View/About/About';
import Contact from './View/Contact/Contact';
import Login from './View/Login/Login';
import Signup from './View/Signup/Signup';
import Home from './View/Home/Home';
import Footer from './Component/Footer/Footer';

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
  
  <Navbar/>

   <RouterProvider router={router}/>

   <Footer/>
   </>

);


