import { Layout } from "antd";
import React from "react";

import './style.css'

const { Footer: AntFooter } = Layout;

export const Footer = () => {
  return (
    <AntFooter>
      <p className="footer">©Netflix company, {new Date().getFullYear()}</p>
    </AntFooter>
  );
};
