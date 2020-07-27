import React, { Component } from "react";
import NavBar from "../../components/navbar";
// import logo from "./logo.svg";
import NewProjectInput from "../../components/addNewProjectInput";
import Header from "../../components/header";
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

interface IProjectProps extends RouteComponentProps<any> {
  projects?: string[];
}

class HomeScreen extends Component<IProjectProps> {
  render() {
    let user = firebase.auth().currentUser;

    // if (user) {
      const { projects } = this.props;
      return (
        <div className="App">
          <NewProjectInput />
          <ProjectList projects={projects} />
          <NavBar />
        </div>
      );
      // User is signed in.
    // } else {
    //   return <Redirect to="/" />;
    //   // No user is signed in.
    // }
  }
}

const mapStateToProps = (state: any) => {
  console.log(state);
  return {
    projects: state.firestore.ordered.projects,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(HomeScreen) as any;
