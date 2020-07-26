import React from "react";
// import NavBar from "../../components/navbar";
// import logo from "./logo.svg";
import firebase from "firebase";
import { Redirect } from "react-router-dom";
import NavBar from "../../components/navbar";
import Header from "../../components/header";

const TimerScreen = () => {
  let user = firebase.auth().currentUser;

  if (user) {
    return (
      <div>
        <Header />
        <div>Timer Screen</div>
        <NavBar />
      </div>
    );
    // User is signed in.
  } else {
    return <Redirect to="/" />;
    // No user is signed in.
  }
};

export default TimerScreen;
