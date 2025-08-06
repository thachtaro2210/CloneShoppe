import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from "yup"

interface FormData {
  email: string
  password: string
  confirm_password: string
}

export const schema = yup.object({
  email : yup.string().required('Email là bắt buộc').email('Email không đúng định dạng').min(5,'Độ dài từ 5 - 160 kí tự').max(160,'Độ dài từ 5 - 160 kí tự'),
  password : yup.string().required('Password là bắt buộc').max(160,'Độ dài từ 6 - 160 kí tự').min(6,'Độ dài từ 6 - 160 kí tự'),
  confirm_password : yup.string().required('Nhập lại Password là bắt buộc').max(160,'Độ dài từ 6 - 160 kí tự').min(6,'Độ dài từ 6 - 160 kí tự').oneOf([yup.ref('password')],'Nhập lại password không khớp')
})
export type Schema = yup.InferType<typeof schema>

type Rules = {
  [key in keyof FormData]?: RegisterOptions
}
export const getRules = (getValue?: UseFormGetValues<any>):Rules => ({
  email: {
    required: { value: true, message: 'Email là bắt buộc' },
    pattern: {
      value: /^[a-zA-Z0-9]+@gmail\.com$/,
      message: 'Email không đúng định dạng'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 5 - 160 kí tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài từ 5 - 160 kí tự'
    }
  }
  ,

  password: {
    required: { value: true, message: 'Password là bắt buộc' },
   
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6 - 160 kí tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài từ 6 - 160 kí tự'
    }
  },
  confirm_password: {
    required: { value: true, message: 'Password là bắt buộc' },
   
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6 - 160 kí tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài từ 6 - 160 kí tự'
    }
    ,
    validate: typeof getValue === 'function' ? ((value) => value === getValue('password') || 'Nhập lại mật khẩu') : undefined
  }
}
)
