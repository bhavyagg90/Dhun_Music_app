import React from "react";
import './login.css';
import { loginEndpoint } from "../../spotify";

export default function Login() {
  return (
    <div className="login-page">
      <img
        src="https://res.cloudinary.com/dbmgq27le/image/upload/v1683108008/m_1_jr4icn.png"
        alt="logo-Dhun"
        className="logo"
      />
      <a href={loginEndpoint}>
        <div className="login-btn">LOG IN</div>
      </a>
    </div>
  );
}
