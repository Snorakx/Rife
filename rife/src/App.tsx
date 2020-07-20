import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./style.scss";
import HomeScreen from "./screens/Home/index";
import User from "./screens/User/index";
import RegisterScreen from "./screens/Register/index";
import LoginScreen from "./screens/Start/index";

// import Firebase, { app } from "firebase";

// import "firebase/auth";
// import firebase from "firebase";
import Login from "./screens/Login";
import ForgotPassword from "./screens/forgotPassword";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/login" component={Login} />
          <Route path="/passwordReset" component={ForgotPassword} />

          <Route path="/home" component={HomeScreen} />
          <Route path="/user" component={User} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
