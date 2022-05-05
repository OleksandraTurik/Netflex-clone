import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Passsword is required').min(8, 'Too short length symbols')
  });