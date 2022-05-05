import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { authActionCreator } from "../../store/reducers/auth/actionCreator";

import "./style.css";

const Header = () => {
  const { user, isAuth } = useTypedSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(authActionCreator.logout());
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <header className="page-header">
      <span className="title">Netflix clone</span>
      {isAuth ? (
        <button onClick={handleClick} className="button-container">
          Log out
        </button>
      ) : (
        <button onClick={handleLoginClick} className="button-container">
          Log in
        </button>
      )}
      <p>{user.displayName}</p>
    </header>
  );
};

export default Header;
