import React, { FC } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Button, FormControl, InputGroup } from "react-bootstrap";

const NewProjectInput: FC = (props) => {
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <InputGroup.Append>
        <Button variant="outline-secondary">Button</Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default NewProjectInput;
