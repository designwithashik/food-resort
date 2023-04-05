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
import DishDetails from './components/DishDetails'
import MenuItems from './components/MenuItems'

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
        element: <Menu />,
        children: [
          // {
          //   path: 'menu/',
          //   element: <MenuItems/>,
          //   loader: () => fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese')
          // },
          {
            path: '/menu/:name',
            element: <MenuItems/>,
            loader: ({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${params.name}`),
          }

        ]
  
      },
      {
        path: '/search',
        element: <Search/>

      },
      {
        path: 'cart',
        element: <Cart/>
      },
      {
        path: 'dish/:Id',
        element: <DishDetails/>,
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.Id}`)
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
