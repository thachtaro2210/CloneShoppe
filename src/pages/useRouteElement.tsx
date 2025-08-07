import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import ProductList from './ProductList'
import Login from './Login'
import Register from './Register'
import RegisterLayout from '../layout/RegisterLayout'
import MainLayout from '../layout/MainLayout'
import Profile from './Profile'
  const isAuthenticated = true
function ProtectedRoute() {

  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}
function RejectedRoute() {
  // const isAuthenticated = false
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}
export default function useRouteElement() {
  // do something
  const routeElement = useRoutes([
    {
      path: '/',
      index:true,
      // để làm trang chủ
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    },
    {path:'',
      element:<ProtectedRoute/>,
      children:[{
        path:'profile',
        element:(
           <MainLayout>
          <Profile/>
        </MainLayout>
        )
      }]
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
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
      ]
    }
  ])
  return routeElement
}
