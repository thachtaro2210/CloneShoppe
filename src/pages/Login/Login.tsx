import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema, type Schema } from '../../utils/rules';
import Input from '../../Components/input';
import { AppContext } from '../../contexts/app.context';
import Button from '../../Components/Button';
import { useMutation } from '@tanstack/react-query';
import { LoginAccount } from '../../apis/auth.api';
import { isAxiosUnprocessableEntityError } from '../../utils/utils';
import type { ErrorResponseApi } from '../../types/utils.type';

type FormData = Omit<Schema, 'confirm_password'>;
const loginSchema = schema.omit(['confirm_password']);

export default function Login() {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  });

  const loginMutation = useMutation({
    mutationFn: (body: FormData) => LoginAccount(body)
  });

  const onSubmit = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess: (response) => {
        console.log('Login successful', response.data);
        localStorage.setItem('access_token', response.data.data.access_token);
        setIsAuthenticated(true);
        navigate('/');
      },
      onError: (error) => {
        console.error('Login error', error);
        if (isAxiosUnprocessableEntityError<ErrorResponseApi<FormData>>(error)) {
          const formError = error.response?.data.data;
          if (formError?.username) {
            setError('username', { message: formError.username, type: 'Server' });
          }
          if (formError?.password) {
            setError('password', { message: formError.password, type: 'Server' });
          }
        }
      }
    });
  });

  return (
    <div className='bg-orange-500'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form onSubmit={onSubmit} className='p-10 rounded bg-white shadow-sm' noValidate>
              <div className='text-2xl'>Đăng Nhập</div>

              <Input
                name='username'
                register={register}
                type='text'
                className='mt-8'
                errorMessage={errors.username?.message}
                placeholder='Username'
              />
              <Input
                name='password'
                register={register}
                type='password'
                className='mt-2'
                errorMessage={errors.password?.message}
                placeholder='Password'
              />

              <div className='mt-3'>
                <Button
                  isLoading={loginMutation.isPending}
                  disabled={loginMutation.isPending}
                  type='submit'
                  className='w-full text-center py-4 px-2 uppercase bg-red-400 text-white text-sm hover:bg-red-600 flex justify-center items-center'
                >
                  Đăng Nhập
                </Button>
              </div>

              <div className='mt-8'>
                <div className='flex items-center justify-center'>
                  <span className='text-gray-350'>Bạn chưa có tài khoản?</span>
                  <Link className='text-red-400 ml-1' to='/register'>
                    Đăng Kí
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}