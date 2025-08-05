import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'

interface FormData {
  email: string
  password: string
  confirm_password: string
}


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
