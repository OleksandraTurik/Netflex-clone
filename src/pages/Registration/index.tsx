import React from 'react'
import { useDispatch } from 'react-redux';
import { LoginForm } from '../../Components/LoginForm'
import { MyFormValues } from '../../Components/LoginForm/types';
import { authActionCreator } from '../../store/reducers/auth/actionCreator';

const Registration = () => {
    const dispatch = useDispatch()
    const handleSubmit = (values: MyFormValues) => {
      dispatch(authActionCreator.register(values.email, values.password))
    }
  return (
    <div className='main'>
      <LoginForm onSubmit={handleSubmit} formType='registration'/>
    </div>
  )
}

export default Registration;
