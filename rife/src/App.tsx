import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./style.scss";
import HomeScreen from "./screens/Home/index";
import User from "./screens/User/index";
import RegisterScreen from "./screens/Register/index";
import LoginScreen from "./screens/Start/index";

import Firebase, { app } from "firebase";

import "firebase/auth";
import firebase from "firebase";
import Login from "./screens/Login";

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/login" component={Login} />

        <Route path="/home" component={HomeScreen} />
        <Route path="/user" component={User} />
      </div>
    </Router>
  );
};

export default App;
