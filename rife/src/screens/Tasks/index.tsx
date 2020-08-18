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
  componentDidMount() {
    console.log(this.props.location.state);
  }
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

const mapStateToProps = (state: any, props: any) => ({
  tasks: state.firestore.ordered.mytasks,
  authUID: state.firebase.auth.uid,
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props: any) => {
    console.log(props);
    return [
      {
        collection: "users",
        doc: props.authUID,
        subcollections: [
          { collection: "projects", doc: props.location.state },
          { collection: "tasks" },
        ],
        storeAs: "mytasks",
      },
    ];
  })
)(TasksScreen) as any;
