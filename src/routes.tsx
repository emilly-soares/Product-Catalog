import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/layout'
import { Login } from './pages/login'
import { Products } from './pages/products'
import { Product } from './pages/product'
import { Favorites } from './pages/favorites'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/login',
        element: <Login />
      }
      ,
      {
        path: '/',
        element: <Products />
      },
      {
        path: '/favoritos/',
        element: <Favorites />
      },
      {
        path: '/product/:productId',
        element: <Product />
      },
    ]
  }
])

export { router }
