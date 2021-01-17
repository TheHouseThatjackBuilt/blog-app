import * as yup from 'yup';

export const schemaSignUp = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Your username must be at least 3 charecters.')
    .max(30, 'Must be shorter than 20 charecters.')
    .required('Username field is required.'),
  email: yup
    .string()
    .email('Invalid email adress.')
    .required('Email field is required.'),
  password: yup
    .string()
    .required('Password field is required.')
    .min(6, 'Your password needs to be at least 6 characters.'),
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password'), null], "Passwords don't match."),
});
