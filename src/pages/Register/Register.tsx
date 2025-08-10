import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema, type Schema } from '../../utils/rules'; // Đảm bảo schema khớp
import Input from '../../Components/input';
import Button from '../../Components/Button';
import { useMutation } from '@tanstack/react-query';
import { RegisterAccount } from '../../apis/auth.api';
import { omit } from 'lodash';
import { isAxiosUnprocessableEntityError } from '../../utils/utils';
import type { ErrorAuthResponse } from '../../types/auth.type';
import { AppContext } from '../../contexts/app.context';

type FormData = Schema;

export default function Register() {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const registerMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => RegisterAccount(body),
  });

 const onSubmit = handleSubmit((data) => {
  const body = omit(data, ['confirm_password']);
  registerMutation.mutate(body, {
    onSuccess: (response) => {
      console.log('Register successful', response.data);
      localStorage.setItem('access_token', response.data.data.access_token); // Truy cập data.access_token
      setIsAuthenticated(true);
      navigate('/login');
    },
    onError: (error) => {
      console.error('Register error', error);
      if (isAxiosUnprocessableEntityError<ErrorAuthResponse>(error)) {
        const formError = error.response?.data.data;
        if (formError && typeof formError === 'object') {
          Object.entries(formError).forEach(([key, value]) => {
            if (typeof value === 'string') {
              setError(key as keyof FormData, { message: value, type: 'Server' });
            }
          });
        }
      }
    },
  });
});

  return (
    <div className='bg-orange-500'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form onSubmit={onSubmit} className='p-10 rounded bg-white shadow-sm' noValidate>
              <div className='text-2xl'>Đăng Kí</div>

              <Input
                name='username' // Thay email bằng username
                register={register}
                type='text' // Thay type='email' bằng type='text' vì dùng username
                className='mt-8'
                errorMessage={errors.username?.message} // Sửa thành username
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

              <Input
                name='confirm_password'
                register={register}
                type='password'
                className='mt-2'
                errorMessage={errors.confirm_password?.message}
                placeholder='Confirm Password'
              />

              <div className='mt-3'>
                <Button
                  isLoading={registerMutation.isPending} // Sử dụng isPending
                  disabled={registerMutation.isPending}
                  className='w-full text-center py-4 px-2 uppercase bg-red-400 text-white text-sm hover:bg-red-600 flex justify-center items-center'
                >
                  Đăng Kí
                </Button>
              </div>

              <div className='mt-8'>
                <div className='flex items-center justify-center'>
                  <span className='text-gray-350'>Bạn đã có tài khoản?</span>
                  <Link className='text-red-400 ml-1' to='/login'>
                    Đăng Nhập
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