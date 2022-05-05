import React from 'react'
import { LoginForm } from '../../Components/LoginForm'
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../faribase';
import { MyFormValues } from '../../Components/LoginForm/types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActionCreator } from '../../store/reducers/auth/actionCreator';

const Login = () => {
  const dispatch = useDispatch()
  const handleSubmit = (values: MyFormValues) => {
    dispatch(authActionCreator.login(values.email, values.password))
  }
  console.log(auth);
  

  return (
    <div className='main'>
      <LoginForm formType='login' onSubmit={handleSubmit}/>
      <Link to='/registration'> Or sign up
      </Link>
    </div>
  )
}

export default Login;
