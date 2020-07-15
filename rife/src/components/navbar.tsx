import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MdAspectRatio } from "react-icons/md";
import { IconContext } from "react-icons";

const NavBar: FC = (props) => {
  return (
    <div className="nav-container">
      <IconContext.Provider value={{ className: "nav-icons" }}>
        <Link to={"/user"}>
          <MdAspectRatio />
        </Link>
        <Link to={"/user"}>
          <MdAspectRatio />
        </Link>
        <Link to={"/user"}>
          <MdAspectRatio />
        </Link>
      </IconContext.Provider>
    </div>
  );
};

export default NavBar;
