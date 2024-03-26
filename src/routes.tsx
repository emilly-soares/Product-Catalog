import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/layout'
import { Login } from './pages/login'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      
    ]
  }
])

export { router }
