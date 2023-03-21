import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Layout as MainLayout } from "antd";

const { Content } = MainLayout;

const Layout = () => {
  return (
    <MainLayout>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer></Footer>
    </MainLayout>
  );
};

export default Layout;
