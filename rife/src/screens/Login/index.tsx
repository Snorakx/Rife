import React from "react";
import Header from "../../components/header";
import AuthForm from "../../components/register";
import StartLoginScreen from "../../components/startLoginScreen";
import LoginPassword from "../../components/loginPassword";

const Login = () => {
  return (
    <div className="App">
      <Header />
      <LoginPassword />
    </div>
  );
};

export default Login;
