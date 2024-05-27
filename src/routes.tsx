import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/layout'
import { Login } from './pages/login'
import { Products } from './pages/products'
import { Product } from './pages/product'
import { Favorites } from './pages/favorites'
import UserProvider from './contexts/UserContext'
import { CartProvider } from './contexts/CartContext'
import { UserProfileForm } from './components/user'

const router = createBrowserRouter([
  {
    element: (
      <CartProvider>
        <UserProvider>
          <Layout />
        </UserProvider>
      </CartProvider>
    ),
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
      {
        path: "/profile",
        element: <UserProfileForm/>
      }
    ]
  }
])

export { router }
