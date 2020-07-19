import React from "react";
import NavBar from "../../components/navbar";
import logo from "./logo.svg";
import NewProjectInput from "../../components/addNewProjectInput";
import Header from "../../components/header";
import firebase from "firebase";
import { Redirect } from "react-router-dom";
import ProjectList from "../../components/projectList";

const HomeScreen = () => {
  var user = firebase.auth().currentUser;

  if (user || !user) {
    return (
      <div className="App">
        <Header />
        <NewProjectInput />
        <ProjectList />
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
