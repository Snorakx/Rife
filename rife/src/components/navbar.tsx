import React, { FC } from "react";
import { Link } from "react-router-dom";
import { MdAlarmOn  } from "react-icons/md";
import { FaCalendarAlt, FaTasks } from "react-icons/fa";
import { IconContext } from "react-icons";

const NavBar: FC = (props) => {
  return (
    <div className="nav-container">
      <IconContext.Provider value={{ className: "nav-icons" }}>
<<<<<<< HEAD
        <Link to={"/home"}>
          <MdAspectRatio />
        </Link>
        <Link to={"/timer"}>
          <MdAspectRatio />
=======
        <Link to={"/user"}>
          <FaTasks />
        </Link>
        <Link to={"/user"}>
          <MdAlarmOn />
>>>>>>> bc259f8ad95c0f4ca6b6ab239723653aa2ac3dd8
        </Link>
        <Link to={"/user"}>
          <FaCalendarAlt />
        </Link>
      </IconContext.Provider>
    </div>
  );
};

export default NavBar;
