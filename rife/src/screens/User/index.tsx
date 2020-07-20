import React from "react";
// import NavBar from "../../components/navbar";
// import logo from "./logo.svg";
import firebase from "firebase";
import { Redirect } from "react-router-dom";

const UserScreen = () => {
  let user = firebase.auth().currentUser;

  if (user) {
    return <div>User Screen</div>;
    // User is signed in.
  } else {
    return <Redirect to="/" />;
    // No user is signed in.
  }
};

export default UserScreen;
