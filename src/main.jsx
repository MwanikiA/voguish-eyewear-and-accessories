import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HeroSection from './components/hero/hero.jsx'
import Contacts from './pages/contact-lenses/contact-lenses.jsx'
import Sunglasses from './pages/sunglasses/sunglasses.jsx'
import Optical from './pages/optical-glasses/optical.jsx'
import Masquerade from './pages/masquarade-masks/masquarade-masks.jsx'
import Loginmain from './pages/login/loginmain.jsx'
import Registermain from './pages/login/registermain.jsx'
import FavSection from './components/favorites/favorites.jsx'
import Addtocart from './components/addtocart/cart.jsx'
import Checkout from './pages/checkout/checkout.jsx'


const urls = [
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/hero',
    element:<HeroSection/>
  },
  {
    path:'/addtocart',
    element:<Addtocart/>
  },
  {
    path:'/contact-lenses',
    element:<Contacts/>
  },
  {
    path:'/sunglasses',
    element:<Sunglasses/>
  },
  {
    path:'/optical-glasses',
    element:<Optical/>
  },
  {
    path:'/masquarade-masks',
    element:<Masquerade/>
  },
  {
    path:'/loginmain',
    element:<Loginmain/>
  },
  {
    path:'/registermain',
    element:<Registermain/>
  },
  {
    path:'/favorites',
    element:<FavSection/>
  },
  {
    path:'/checkout',
    element:<Checkout/>
  },
  

]

const paths = createBrowserRouter(urls)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={paths}/>
  </React.StrictMode>,
)
