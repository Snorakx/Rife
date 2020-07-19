import React, { FC } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IconContext } from "react-icons";
import {
  Button,
  FormControl,
  InputGroup,
  Container,
  Row,
  Col,
  ListGroup,
} from "react-bootstrap";

const ProjectList: FC = (props) => {
  return (
    <ListGroup>
      <ListGroup.Item variant="primary" style={{ height: "200%" }}>
        <div className="abc">ABC</div>
        <br />
        <div>abc</div>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default ProjectList;
