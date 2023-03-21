import React from "react";
import { LoginForm } from "../../Components/LoginForm";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { MyFormValues } from "../../Components/LoginForm/types";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActionCreator } from "../../store/reducers/auth/actionCreator";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Login = () => {
  const location: any = useLocation();
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const { error, loading, user } = useTypedSelector((state) => state.auth);
  const pathName = location.state?.from.pathname || "/";

  const handleSubmit = (values: MyFormValues) => {
    dispatch(authActionCreator.login(values.email, values.password));
    if (!error && !loading) {
      navigation(pathName);
    }
  };
  console.log(auth);

  const handleClick = () => {
    dispatch(authActionCreator.loginWithGoogle());
    if (!error && !loading) {
      navigation(pathName);
    }
  };

  if(user.email) {
    navigation(pathName)
  }

  return (
    <div className="main">
      <LoginForm
        onGoogleClick={handleClick}
        formType="login"
        onSubmit={handleSubmit}
      />
      <Link to="/registration"> Or sign up</Link>
    </div>
  );
};

export default Login;
