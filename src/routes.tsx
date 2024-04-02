import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/layout'
import { Login } from './pages/login'
import { Produtos } from './pages/produtos'

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
        element: <Produtos />
      },
      
    ]
  }
])

export { router }
