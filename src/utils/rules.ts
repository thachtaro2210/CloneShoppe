// src/utils/rules.ts
import type { RegisterOptions, UseFormGetValues } from 'react-hook-form';
import * as yup from 'yup';

interface FormData {
  username: string; // Thay email bằng username để khớp với backend
  password: string;
  confirm_password: string;
}

export const schema = yup.object({
  username: yup
    .string()
    .required('Username là bắt buộc')
    .min(3, 'Username phải có ít nhất 3 ký tự')
    .max(160, 'Username không được vượt quá 160 ký tự'),
  password: yup
    .string()
    .required('Password là bắt buộc')
    .min(6, 'Password phải có ít nhất 6 ký tự')
    .max(160, 'Password không được vượt quá 160 ký tự'),
  confirm_password: yup
    .string()
    .required('Nhập lại Password là bắt buộc')
    .min(6, 'Nhập lại Password phải có ít nhất 6 ký tự')
    .max(160, 'Nhập lại Password không được vượt quá 160 ký tự')
    .oneOf([yup.ref('password')], 'Nhập lại Password không khớp'),
});

export type Schema = yup.InferType<typeof schema>;
export const loginSchema = schema.omit(['confirm_password']);

type Rules = {
  [key in keyof FormData]?: RegisterOptions;
};

export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  username: {
    required: { value: true, message: 'Username là bắt buộc' },
    minLength: { value: 3, message: 'Username phải có ít nhất 3 ký tự' },
    maxLength: { value: 160, message: 'Username không được vượt quá 160 ký tự' },
  },
  password: {
    required: { value: true, message: 'Password là bắt buộc' },
    minLength: { value: 6, message: 'Password phải có ít nhất 6 ký tự' },
    maxLength: { value: 160, message: 'Password không được vượt quá 160 ký tự' },
  },
  confirm_password: {
    required: { value: true, message: 'Nhập lại Password là bắt buộc' },
    minLength: { value: 6, message: 'Nhập lại Password phải có ít nhất 6 ký tự' },
    maxLength: { value: 160, message: 'Nhập lại Password không được vượt quá 160 ký tự' },
    validate:
      typeof getValues === 'function'
        ? (value) => value === getValues('password') || 'Nhập lại Password không khớp'
        : undefined,
  },
});