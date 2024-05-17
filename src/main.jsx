import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import'swiper/css'

//bootstrap.css
import './assets/css/bootstrap.min.css';
import './assets/js/bootstrap.min.js';

//fonts and icons
import '././assets/css/icofont.min.css';
import './assets/css/animate.css';
import './assets/css/style.min.css'
import Home from './Home/Home.jsx';
import Blog from './blog/Blog.jsx';


const router = createBrowserRouter([
  {
    path: '/',
        element: <App />,
        children:[
          {
            path: '/',
            element: <Home/>,
          },{
            path:'/blog',
            element: <Blog/>,
          }
        ]
  },]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
        </RouterProvider>
  </React.StrictMode>,
)