import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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
      <Link to="/" className="title">
        Netflix clone
      </Link>
      <p>{user.displayName}</p>
      {isAuth ? (
        <button onClick={handleClick} className="button-container">
          Log out
        </button>
      ) : (
        <button onClick={handleLoginClick} className="button-container">
          Log in
        </button>
      )}
    </header>
  );
};

export default Header;
