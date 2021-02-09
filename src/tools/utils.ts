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
    .min(3, 'Your username must be at least 3 characters.')
    .max(30, 'Must be shorter than 20 characters.'),
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
  username: yup.string().max(30, 'Must be shorter than 20 characters.'),
  email: yup.string().email('Invalid email adress.'),
  password: yup.string(),
  image: yup.string().url('enter correct url'),
});

export const articleShema = yup.object().shape({
  title: yup
    .string()
    .required('article title is required.')
    .min(3, 'title must be at least 3 characters.')
    .max(30, 'title mus be shorter than 20 characters.'),
  description: yup
    .string()
    .required('article description is required.')
    .min(3, 'article description must be at least 3 characters.')
    .max(70, 'article description mus be shorter than 70 characters.'),
  body: yup.string().required('article text is required.').min(3, 'article text must be at least 3 characters.'),
});
