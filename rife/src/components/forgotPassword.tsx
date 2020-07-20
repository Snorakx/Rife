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
    <Form>
      <Form.Group controlId="Email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Button
        style={{ width: "50%" }}
        variant="secondary"
        onClick={resetPassword}
      >
        Reset
      </Button>
    </Form>
  );
};

export default PasswordReset;
