import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { authActionCreator } from "../../../store/reducers/auth/actionCreator";
import { Avatar, Dropdown, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./style.css";

export const Header = () => {
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleMenuClick = (e: any) => {
    console.log(e);
    switch (e.key) {
      case "logout":
        dispatch(authActionCreator.logout());
        break;
      case "login":
        navigate("/login");
        break;
        case 'profile':
          navigate('/profile')
          break;
      default:
        break;
    }
  };

  const menu = (
    <Menu className="user-menu" onClick={handleMenuClick}>
      {isAuth && (
        <Menu.ItemGroup key="1">
          <span
            dangerouslySetInnerHTML={{
              __html: `<b>${user.displayName}</b><br/>${user.email}`,
            }}
          />
        </Menu.ItemGroup>
      )}
      <Menu.Divider />
      <Menu.Item key='profile'>
        <span>profile</span>    
      </Menu.Item>
      {isAuth ? (
        <Menu.Item key="logout" className="user-menu--logout">
          <span>Вийти</span>
        </Menu.Item>
      ) : (
        <Menu.Item key="login" className="user-menu--logout">
          <span>Увійти</span>
        </Menu.Item>
      )}
    </Menu>
  );

  return (
    <header className="page-header" color="purple">
      <div className="logo-container">
        <p className="logo" onClick={handleLogoClick}>
          Movie List
        </p>
      </div>
      <Dropdown overlay={menu} className="user-container">
        <Avatar src={user.photoURL} icon={<UserOutlined />} />
      </Dropdown>
    </header>
  );
};
