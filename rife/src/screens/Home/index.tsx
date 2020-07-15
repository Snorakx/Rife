import React from "react";
import NavBar from "../../components/navbar";
import logo from "./logo.svg";
import NewProjectInput from "../../components/addNewProjectInput";
import Header from "../../components/header";
import firebase from "firebase";
import { Redirect } from "react-router-dom";

const HomeScreen = () => {
  var user = firebase.auth().currentUser;

  if (user) {
    return (
      <div className="App">
        <Header />
        <NewProjectInput />
        <NavBar></NavBar>
      </div>
    );
    // User is signed in.
  } else {
    return <Redirect to="/" />;
    // No user is signed in.
  }
};

export default HomeScreen;
