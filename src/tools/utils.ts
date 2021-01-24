import { format } from 'date-fns';
import * as yup from 'yup';

import { ValueOrEmpty } from '../types/components/index.d';

export const formatedDate = (date: Date, formatDate: string) => format(date, formatDate);

export const notEmpty = <T>(value: ValueOrEmpty<T>): value is T => value !== null;

// почему нельзя использовать 1 форму?
export const registerSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username field is required.')
    .min(3, 'Your username must be at least 3 charecters.')
    .max(30, 'Must be shorter than 20 charecters.'),
  email: yup.string().email('Invalid email adress.').required('Email field is required.'),
  password: yup.string().required('Password field is required.').min(6, 'Your password needs to be at least 6 characters.'),
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password'), null], "Passwords don't match."),
});

export const authSchema = yup.object().shape({
  email: yup.string().email('Invalid email adress.').required('Email field is required.'),
  password: yup.string().required('Password field is required.').min(6, 'Your password needs to be at least 6 characters.'),
});

export const updateProfileSchema = yup.object().shape({
  username: yup.string().max(30, 'Must be shorter than 20 charecters.'),
  email: yup.string().email('Invalid email adress.'),
  password: yup.string(),
  image: yup.string().url('enter correct url'),
});
