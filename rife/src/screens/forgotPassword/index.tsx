import React from "react";
import NavBar from "../../components/navbar";
import logo from "./logo.svg";
import NewProjectInput from "../../components/addNewProjectInput";
import Header from "../../components/header";
import firebase from "firebase";
import { Redirect } from "react-router-dom";
import PasswordReset from "../../components/forgotPassword";

const ForgotPassword = () => {
  var user = firebase.auth().currentUser;

  return (
    <div className="App">
      <Header />
      <PasswordReset />
    </div>
  );
};

export default ForgotPassword;
