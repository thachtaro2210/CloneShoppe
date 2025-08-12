import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../contexts/app.context';
import ProductList from './ProductList';
import Login from './Login';
import Register from './Register';
import RegisterLayout from '../layout/RegisterLayout';
import MainLayout from '../layout/MainLayout';
import Profile from './Profile';
import Cart from './Cart/Cart';
import ProductDetail from './ProductList/ProductDetail/ProductDetail';
import NotFound from './NotFound';
import HomePage from './HomePage'; // Giả sử bạn đã tạo HomePage

function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext); 
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext); 
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default function useRouteElement() {
  const routeElement = useRoutes([
    // Route chính cho HomePage (làm trang chủ)
    {
      path: '/',
      index: true,
      element: (
        <MainLayout>
          <HomePage />
        </MainLayout>
      ),
    },
    // Route cho danh sách sản phẩm (có thể là /products)
    {
      path: '/products',
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      ),
    },
    // Route bảo vệ (chỉ cho người dùng đã đăng nhập)
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: '/profile',
          element: (
            <MainLayout>
              <Profile />
            </MainLayout>
          ),
        },
        {
          path: '/cart',
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
    // Route từ chối (chỉ cho người dùng chưa đăng nhập)
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
    // Route 404 Not Found
    {
      path: '*',
      element: (
        <MainLayout>
          <NotFound />
        </MainLayout>
      ),
    },
  ]);

  return routeElement;
}