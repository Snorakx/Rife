import React, { Component } from "react";
import NavBar from "../../components/navbar";
// import logo from "./logo.svg";
import NewProjectInput from "../../components/addNewProjectInput";
import Header from "../../components/header";
import NewTaskInput from "../../components/addNewTask";
import firebase from "firebase";
import {
  Redirect,
  withRouter,
  RouteComponentProps,
  RouteProps,
} from "react-router-dom";
import ProjectList from "../../components/projectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import TaskList from "../../components/taskList";

interface IProjectProps extends RouteComponentProps<any> {
  tasks?: string[];
}

class TasksScreen extends Component<IProjectProps> {
  render() {
    let user = firebase.auth().currentUser;

    if (user) {
      const { tasks } = this.props;
      return (
        <div className="App">
          <Header />
          <NewTaskInput />
          <TaskList tasks={tasks} />
          <NavBar />
        </div>
      );
      // User is signed in.
    } else {
      return <Redirect to="/" />;
      // No user is signed in.
    }
  }
}

const mapStateToProps = (state: any) => {
  console.log(state);
  return {
    tasks: state.firestore.ordered.tasks,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "tasks" }])
)(TasksScreen) as any;
