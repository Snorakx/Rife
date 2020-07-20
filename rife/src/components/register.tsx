import React, { FC, useState } from "react";
import { Form, Button } from "react-bootstrap";
import firebase from "firebase";
// import { db } from "../constans/config";
import { Link, useHistory } from "react-router-dom";

const AuthForm: FC = (props) => {
  const history = useHistory();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [c_password, setC_Password] = useState<string>("");

  const register = () => {
    if (password != c_password) {
      console.log("NIE PASUJĄ HASEŁKA ZIOMUŚ");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((result) => {
          let user = result.user;
          if (user) {
            history.push("/home");
          } else {
            console.log("NIE WCHODZISZ");
          }
        });
      // db.ref("/user").push({
      //   name: name,
      //   email: email,
      //   //   pass: password,
      // });
    }
  };

  return (
    <Form>
      <Form.Group controlId="Name">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="name"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
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
      <Form.Group controlId="Password">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={c_password}
          onChange={(e) => setC_Password(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button style={{ width: "50%" }} variant="secondary" onClick={register}>
        Register
      </Button>
      <div>
        IF U HAVE ACC GO TO <Link to="/">Login</Link>
      </div>
    </Form>
  );
};

export default AuthForm;
