import React, { FC, useState } from "react";
import { Form, Button } from "react-bootstrap";
import firebase from "firebase";
import { db } from "../constans/config";
import Header from "../components/header";
import { Link, useHistory } from "react-router-dom";
import { AiFillGoogleCircle, AiFillFacebook } from "react-icons/ai";
import { IconContext } from "react-icons";

const navigate = () => {};

const StartLoginScreen: FC = (props) => {
  const history = useHistory();

  const facebookLogin = () => {
    let provider = new firebase.auth.FacebookAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const credential = result.credential as firebase.auth.OAuthCredential;
        let token = credential.accessToken;
        let user = result.user;

        if (user) {
          history.push("/home");
        } else {
          console.log("NIE WCHODZISZ");
        }
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  const googleLogin = () => {
    let provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = result.credential as firebase.auth.OAuthCredential;

        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        if (user) {
          history.push("/home");
        } else {
          console.log("NIE WCHODZISZ");
        }

        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  return (
    <div
      style={{
        marginLeft: "30%",
        marginTop: "50%",
      }}
    >
      <Link to="/login">
        <Button
          style={{
            width: "50%",
          }}
          variant="secondary"
        >
          Login
        </Button>
      </Link>
      <br />
      <Link to="/register">
        <Button
          style={{
            width: "50%",
            marginTop: "5%",
          }}
          variant="secondary"
        >
          Register
        </Button>
      </Link>
      <div style={{ width: "50%", textAlign: "center" }}>OR</div>
      <div className="social-icons-container">
        <IconContext.Provider value={{ className: "social-icons" }}>
          <AiFillGoogleCircle onClick={googleLogin} />
          <AiFillFacebook onClick={facebookLogin} />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default StartLoginScreen;
