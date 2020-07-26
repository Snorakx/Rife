import React, { FC, useState } from "react";
import { Form, Button } from "react-bootstrap";
import firebase from "firebase";
// import { db } from "../constans/config";
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
    <form>
      <div className="input-container">
        <label className="email-label">E-mail</label>
        <input
          name="name"
          className="input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="password-label">Hasło</label>
        <input
          type="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            className="checkbox"
            type="checkbox"
            label="Zapamiętaj mnie"
          />
        </Form.Group>
        <Button className="second-login-btn" onClick={login}>
          Zaloguj
        </Button>
        <div>
          <Link className="forget-password" to="/passwordReset">Zapomniałeś hasła? </Link> 
          <Link className="create-account" to="/register">Pierwszy raz tutaj? <b>Zarejestruj</b> </Link>       
        </div>
      </div>
    </form>
  );
};

export default LoginPassword;
