import type { SuccessAuthResponse } from "../types/auth.type";
import http from "../utils/http";

// Đăng ký tài khoản
export const RegisterAccount = (body: { username: string; password: string }) =>
  http.post<SuccessAuthResponse>('/users/register', body);

// Đăng nhập tài khoản
export const LoginAccount = (body: { username: string; password: string }) =>
  http.post<SuccessAuthResponse>('/users/login', body);

// Đăng xuất tài khoản
export const logout = () => {
  const accessToken = localStorage.getItem('access_token');
  return http.post<SuccessAuthResponse>(
    '/users/logout', // Cập nhật đường dẫn khớp với endpoint
    {},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`, // Thêm token để xác thực
      },
    }
  );
};