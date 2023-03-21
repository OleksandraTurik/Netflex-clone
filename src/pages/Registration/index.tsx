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

    const handleClick = () => {
      dispatch(authActionCreator.loginWithGoogle())
    }

  return (
    <div className='main'>
      <LoginForm onGoogleClick={handleClick} onSubmit={handleSubmit} formType='registration'/>
    </div>
  )
}

export default Registration;
