import React, { Component } from "react";
import NavBar from "../../components/navbar";
// import logo from "./logo.svg";
import NewProjectInput from "../../components/addNewProjectInput";
import Header from "../../components/header";
import firebase from "firebase";
import { Redirect } from "react-router-dom";
import ProjectList from "../../components/projectList";
import { connect } from "react-redux";

interface IProjectProps {
  projects?: string[];
}

interface IProjectState {}

class Dashboard extends Component<IProjectProps, IProjectState> {
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
  return {
    projects: state.project.projects,
  };
};

export default connect(mapStateToProps)(Dashboard);
