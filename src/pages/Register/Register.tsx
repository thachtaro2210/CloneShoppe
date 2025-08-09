
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
// import { getRules } from '../../utils/rules'
import Input from '../../Components/input'
import { schema, type Schema } from '../../utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { RegisterAccount } from '../../apis/auth.api'
import { omit } from 'lodash'
import { isAxiosUnprocessableEntityError } from '../../utils/utils'
import type {   ErrorResponeApi } from '../../types/utils.type'
import Button from '../../Components/Button'
// interface FormData {
//   email: string
//   password: string
//   confirm_password: string
// }
type FormData = Schema
export default function Register() {
  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => RegisterAccount(body)
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  // const rules = getRules(getValues)

  // const onSubmit = handleSubmit(
  //   data => {
  //     console.log(data)
  //   },
  //   () => {
  //     const password = getValues('password')
  //     console.log(password)
  //   }
  // )
  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password'])
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        console.log(data)
      },
      onError: (error) => {
        console.log(error)
        if (isAxiosUnprocessableEntityError<ErrorResponeApi<Omit<FormData, 'confirm_password'>>>(error)) {
          const formError = error.response?.data.data
          if (formError?.email) {
            setError('email',{
              message:formError.email,
              type:'Server'
            })
          }
          if(formError?.password){
             setError('password',{
              message:formError.password,
              type:'Server'
            })
          }
        }
      }
    })
  })
  return (
    <div className='bg-orange-500'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form onSubmit={onSubmit} className='p-10 rounded bg-white shadow-sm'>
              <div className='text-2xl'>Đăng Kí</div>

              <Input
                name='email'
                register={register}
                type='email'
                className='mt-8'
                errorMessage={errors.email?.message}
                placeholder='Email'
                // rules={email}
              />

              <Input
                name='password'
                register={register}
                type='password'
                className='mt-2'
                errorMessage={errors.password?.message}
                placeholder='Password'
                // rules={rules.password}
              />

              <Input
                name='confirm_password'
                register={register}
                type='password'
                className='mt-2'
                errorMessage={errors.confirm_password?.message}
                placeholder='Confirm Password'
                // rules={rules.confirm_password}
              />

              <div className='mt-3'>
                <Button disabled isLoading className='w-full text-center py-4 px-2 uppercase bg-red-400 text-white text-sm hover:bg-red-600 justify-center items-center'>
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
  )
}
