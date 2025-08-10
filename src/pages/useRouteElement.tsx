// src/routes/index.tsx
import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../contexts/app.context';
import ProductList from './ProductList';
import Login from './Login';
import Register from './Register';
import RegisterLayout from '../layout/RegisterLayout';
import MainLayout from '../layout/MainLayout';
import Profile from './Profile';
import Cart from './Cart/Cart'; // Import the Cart component
import ProductDetail from './ProductList/ProductDetail/ProductDetail';

function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext); // Get isAuthenticated from context
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext); // Get isAuthenticated from context
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: '/',
      index: true,
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      ),
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: 'profile',
          element: (
            <MainLayout>
              <Profile />
            </MainLayout>
          ),
        },
        {
          path: 'cart', // Add cart route
          element: (
            <MainLayout>
              <Cart />
            </MainLayout>
          ),
        },
        {
      path: '/products/:id',
      element: (
        <MainLayout>
          <ProductDetail />
        </MainLayout>
      ),
    },
      ],
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
          ),
        },
        {
          path: '/register',
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          ),
        },
      ],
    },
  ]);

  return routeElement;
}