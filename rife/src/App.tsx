import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./style.scss";
import User from "./screens/User/index";
import RegisterScreen from "./screens/Register/index";
import LoginScreen from "./screens/Start/index";
import HomeScreen from "./screens/Home/index";
import Login from "./screens/Login";
import ForgotPassword from "./screens/forgotPassword";
import TimerScreen from "./screens/Timer";
import TasksScreen from "./screens/Tasks";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/login" component={Login} />
          <Route path="/passwordReset" component={ForgotPassword} />

          <Route path="/home" component={HomeScreen} />
          <Route path="/user" component={User} />

          <Route path="/timer" component={TimerScreen} />
          <Route path="/tasks" component={TasksScreen} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
