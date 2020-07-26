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
    <form>
      <div className="input-container">
        <label className="name-label">Imię</label>
        <input
          className="another-input"
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="another-label">E-mail</label>
        <input
          className="another-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="another-label">Hasło</label>
        <input
          className="another-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="another-label">Powtórz hasło</label>
        <input
          className="another-input"
          type="password"
          value={c_password}
          onChange={(e) => setC_Password(e.target.value)}
        />
        <Button className="second-register-btn" onClick={register}>
          Zarejestruj
        </Button>
        <Link className="login-link" to="/">
          Masz już konto? <b>Zaloguj</b>
        </Link>
      </div>
    </form>
  );
};

export default AuthForm;
