import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/main';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import OrderReview from './components/OrderReview/OrderReview';


const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>,
   children : [
    {
      path : '/',
      element : <Home></Home>,
      loader : ()=> fetch ('tshirts.json')
    },
    {
      path : 'About',
      element : <About/>
    },
    {
      path : 'review',
      element : <OrderReview/>
    }
   ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)