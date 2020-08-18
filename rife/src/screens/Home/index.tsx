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
import {
  firestoreConnect,
  useFirestoreConnect,
  firebaseConnect,
  isLoaded,
  isEmpty,
} from "react-redux-firebase";
import { compose } from "redux";

interface IProjectProps extends RouteComponentProps<any> {
  projects?: string[];
}

class HomeScreen extends Component<IProjectProps> {
  render() {
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

// let userUID = firebase.auth().currentUser?.uid

const mapStateToProps = (state: any, props: any) => ({
  projects: state.firestore.ordered.myprojects,
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
        subcollections: [{ collection: "projects" }],
        storeAs: "myprojects",
      },
    ];
  })
)(HomeScreen) as any;
