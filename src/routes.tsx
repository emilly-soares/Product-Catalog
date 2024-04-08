import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/layout'
import { Login } from './pages/login'
import { Products } from './pages/products'
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
        path: '/produtos/',
        element: <Products />
      },
      {
        path: '/favoritos/',
        element: <Favorites />

      },
    ]
  }
])

export { router }
