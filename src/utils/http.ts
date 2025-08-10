// src/utils/http.ts
import axios, { type AxiosInstance, AxiosError } from "axios";
import HttpStatusCode from "../constants/httpStatusCode.enum";
import { toast } from 'react-toastify';
import type { SuccessAuthResponse, ErrorAuthResponse } from "../types/auth.type";
import { clearAccessTokenFromLS, getAccessTokenFromLS, saveAccessTokenToLS } from "./out";
import { jwtDecode } from 'jwt-decode';

type ErrorResponse = {
  message?: string;
  data?: any;
};

class Http {
  instance: AxiosInstance;
  authInstance: AxiosInstance;
  private accessToken: string;

  constructor() {
    this.accessToken = getAccessTokenFromLS() || '';
    this.instance = axios.create({
      baseURL: 'http://localhost:4000/api',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.authInstance = axios.create({
      baseURL: 'http://localhost:4000/api/users',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Interceptor cho instance chính
    this.instance.interceptors.request.use(
      (config) => {
        console.log('Request URL:', (config.baseURL ?? '') + config.url);
        if (this.accessToken && config.headers && this.isTokenValid()) {
          config.headers.Authorization = `Bearer ${this.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Interceptor cho authInstance
    this.authInstance.interceptors.request.use(
      (config) => {
        console.log('Request URL:', (config.baseURL ?? '') + config.url);
        if (this.accessToken && config.headers && this.isTokenValid()) {
          config.headers.Authorization = `Bearer ${this.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Interceptor response chung
    const responseInterceptor = (instance: AxiosInstance) => {
      instance.interceptors.response.use(
        (response) => {
          const { url } = response.config;
          if (url === '/login' || url === '/register' || url === '/users/login' || url === '/users/register') {
            const authResponse = response.data as SuccessAuthResponse;
            if (authResponse.data && authResponse.data.access_token) {
              this.accessToken = authResponse.data.access_token;
              saveAccessTokenToLS(this.accessToken);
            } else {
              throw new Error('Invalid authentication response');
            }
          } else if (url === '/logout' || url === '/users/logout') {
            this.accessToken = '';
            clearAccessTokenFromLS();
          }
          return response;
        },
        (error: AxiosError<ErrorResponse | ErrorAuthResponse>) => {
          if (!error.response) {
            toast.error('Network error. Please try again.');
            return Promise.reject(error);
          }

          const { status, data } = error.response;
          const message = data?.message || 'An error occurred';

          switch (status) {
            case HttpStatusCode.UnprocessableEntity:
              if (data && 'data' in data) {
                const formErrors = (data as ErrorAuthResponse).data;
                if (formErrors && typeof formErrors === 'object') {
                  Object.entries(formErrors).forEach(([key, value]) => {
                    toast.error(`${key}: ${value}`);
                  });
                }
              }
              break;
            case HttpStatusCode.Unauthorized:
              toast.error('Unauthorized. Please log in again.');
              this.accessToken = '';
              clearAccessTokenFromLS();
              break;
            case HttpStatusCode.Forbidden:
              toast.error('You do not have permission.');
              break;
            case HttpStatusCode.NotFound:
              toast.error('Resource not found.');
              break;
            case HttpStatusCode.TooManyRequests:
              toast.error('Too many requests. Please try again later.');
              break;
            case HttpStatusCode.InternalServerError:
              toast.error('Server error. Please try again later.');
              break;
            default:
              toast.error(message);
          }

          return Promise.reject(error);
        }
      );
    };

    responseInterceptor(this.instance);
    responseInterceptor(this.authInstance);
  }

  private isTokenExpired(token: string): boolean {
    try {
      const decoded: { exp?: number } = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decoded.exp ? decoded.exp < currentTime : true;
    } catch (error) {
      return true;
    }
  }

  public isTokenValid(): boolean {
    const token = this.accessToken;
    return !!token && !this.isTokenExpired(token);
  }
}

const http = new Http();
export const httpInstance = http.instance;
export const authHttpInstance = http.authInstance;
export default http.instance;