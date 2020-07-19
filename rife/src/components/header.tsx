import React, { FC } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useHistory, Link } from "react-router-dom";

const Header: FC = (props) => {
  const history = useHistory();
  return (
    <div className="header">
      <Link to={"/"} style={{ color: "black", textDecoration: "none" }}>
        <div className="logo">RIFE</div>
      </Link>
    </div>
  );
};

export default Header;
