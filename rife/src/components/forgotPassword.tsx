import React, { FC, useState } from "react";
import { Form, Button } from "react-bootstrap";
import firebase from "firebase";
// import { db } from "../constans/config";
import { useHistory } from "react-router-dom";

const PasswordReset: FC = (props) => {
  const history = useHistory();

  const [email, setEmail] = useState<string>("");

  const resetPassword = () => {
    var auth = firebase.auth();
    var emailAddress = email;

    auth
      .sendPasswordResetEmail(emailAddress)
      .then(function () {
        // Email sent.
      })
      .catch(function (error) {
        // An error happened.
      })
      .then(() => {
        setTimeout(history.goBack, 1000);
      });
  };

  return (
    <form>
        <div className="input-container">
        <label className="name-label">E-mail</label>
        <input
          className="another-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
         
        />
      <Button
        onClick={resetPassword}
        className="reset-btn" 
      >
        Zresetuj hasło
      </Button>
        </div>
    </form>


  );
};

export default PasswordReset;
