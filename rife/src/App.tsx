import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./style.scss";
import User from "./screens/User/index";
import RegisterScreen from "./screens/Register/index";
import LoginScreen from "./screens/Start/index";
import HomeScreen from "./screens/Home/index";
import Login from "./screens/Login";
import ForgotPassword from "./screens/forgotPassword";
import TimerScreen from "./screens/Timer";
import TasksScreen from "./screens/Tasks";
import { createBrowserHistory } from "history";

class App extends Component {
  history = createBrowserHistory();
  render() {
    return (
      <Router history={this.history}>
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
      </Router>
    );
  }
}

export default App;
