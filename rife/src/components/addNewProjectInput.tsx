import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AiOutlinePlus } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Button, FormControl, InputGroup } from "react-bootstrap";

const NewProjectInput: FC = (props) => {
  let nameInput = "xx";

  const AddProject = () => {};

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <InputGroup.Append>
        <Button onClick={AddProject} variant="outline-secondary">
          Button
        </Button>
        <Button
          // onClick={() => {
          //   console.log(
          //     "UNDIFAJND TU JEST JAK CO TO SE ZAPAMIEETAM KURWER JEBANĄ"
          //   );
          // }}
          variant="outline-secondary"
        >
          Button
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default NewProjectInput;
