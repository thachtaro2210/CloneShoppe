import { useRoutes } from 'react-router-dom'
import ProductList from './ProductList'
import Login from './Login'
import Register from './Register'
import RegisterLayout from '../layout/RegisterLayout'
import MainLayout from '../layout/MainLayout'

export default function useRouteElement() {
  // do something
  const routeElement = useRoutes([
    {
      path: '/',
      element: (
        <MainLayout><ProductList /></MainLayout>
      )
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          {' '}
          <Register />
        </RegisterLayout>
      )
    }
  ])
  return routeElement
}
