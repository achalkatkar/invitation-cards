import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import About from './View/About/About';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([

  {
    'path': "/about",
    'element': <About/>
  },


])
root.render(

   <RouterProvider router={router}/>

);


