import React, { FC } from "react";
// import { AiOutlinePlus } from "react-icons/ai";
// import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Header: FC = (props) => {
  // const history = useHistory();
  return (
    <div className="header">
      <Link to={"/"} style={{ color: "black", textDecoration: "none" }}>
        <div className="logo">Rife</div>
      </Link>
    </div>
  );
};

export default Header;
