import React from 'react'
import './style.css'
import {MyFormValues} from './types'
import {
  Formik,
  Form,
  Field,
} from 'formik';
import {SignupSchema} from './validaton'
import { useDispatch } from 'react-redux';
import { authActionCreator } from '../../store/reducers/auth/actionCreator';

interface LoginFormProps {
  onSubmit: (values: MyFormValues) => void;
  formType: 'login' | 'registration';
  onGoogleClick: any;
}

export const LoginForm: React.FC<LoginFormProps> = ({onSubmit, formType, onGoogleClick}) => {
  const initialValues: MyFormValues = { email: "", password: "" };
  const dispatch = useDispatch()

  return (
      <div className="form-container">
        <Formik initialValues={initialValues} validationSchema={SignupSchema}
          onSubmit={(values, actions) => {
          onSubmit(values)
          console.log({ values, actions });
          actions.setSubmitting(false);
          actions.resetForm();
        }}>
          {({ errors, touched }) => (
          <Form>
            <div className="form">
                <h1>{formType === 'login' ? 'Login' : 'Registration' }</h1>
              <div className="input-container">
              <label htmlFor="Email">Email</label>
              <Field id="email" name="email" placeholder="Email" /> 
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              </div>
              <div className="input-container">
              <label htmlFor="Password">Password</label>
              <Field id="password" name="password" placeholder="Password" />
              {errors.password && touched.password ? (<div>{errors.password}</div>) : null}
              </div>
              <div className="button-container">
                  <button type='submit'>Log in</button>
              </div>
              <div>
                <button onClick={onGoogleClick} className="button-google" >Log in with Google</button>
              </div>
            </div>
          </Form> 
          )} 
        </Formik>
      </div>
    
  )
}

