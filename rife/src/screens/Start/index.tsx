import React from "react";
import Header from "../../components/header";
// import AuthForm from "../../components/register";
import StartLoginScreen from "../../components/startLoginScreen";

const LoginScreen = () => {
  return (
    <div className="App">
      <Header />
      <StartLoginScreen />
      {/* <AuthForm /> */}
    </div>
  );
};

export default LoginScreen;
