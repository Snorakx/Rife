import React, { FC } from "react";
import { Link } from "react-router-dom";
import { MdAlarmOn } from "react-icons/md";
import { FaCalendarAlt, FaTasks } from "react-icons/fa";
import { IconContext } from "react-icons";

const NavBar: FC = (props) => {
  return (
    <div className="nav-container">
      <IconContext.Provider value={{ className: "nav-icons" }}>
        <Link to={"/user"}>
          <FaTasks />
        </Link>
        <Link to={"/home"}>
          <MdAlarmOn />
        </Link>
        <Link to={"/user"}>
          <FaCalendarAlt />
        </Link>
      </IconContext.Provider>
    </div>
  );
};

export default NavBar;
