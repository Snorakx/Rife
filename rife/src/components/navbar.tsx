import React, { FC } from "react";
import { Link } from "react-router-dom";
import { MdAspectRatio } from "react-icons/md";
import { IconContext } from "react-icons";

const NavBar: FC = (props) => {
  return (
    <div className="nav-container">
      <IconContext.Provider value={{ className: "nav-icons" }}>
        <Link to={"/home"}>
          <MdAspectRatio />
        </Link>
        <Link to={"/timer"}>
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
