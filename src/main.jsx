import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home'
import Search from './components/Search'
import Cart from './components/Cart'
import Menu from './components/Menu'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/menu',
        element: <Menu />
  
      },
      {
        path: '/search',
        element: <Search/>

      },
      {
        path: 'cart',
        element: <Cart/>
      }
    ]
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router = {router}></RouterProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
