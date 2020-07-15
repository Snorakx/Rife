import React, { FC, useState } from "react";
import { Form, Button } from "react-bootstrap";
import firebase from "firebase";
import { db } from "../constans/config";
import { Link, useHistory } from "react-router-dom";

const LoginPassword: FC = (props) => {
  const history = useHistory();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        let user = result.user;
        if (user) {
          history.push("/home");
        } else {
          console.log("ty nie wchodzisz");
        }
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
      <Form.Group controlId="Password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button style={{ width: "50%" }} variant="secondary" onClick={login}>
        Login
      </Button>
      <div>
        IF U DONT HAVE ACC GO TO <Link to="/register">Register</Link>
      </div>
    </Form>
  );
};

export default LoginPassword;
