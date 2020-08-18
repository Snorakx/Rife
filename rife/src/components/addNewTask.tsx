import React, { FC, Component, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { ISingleTask } from "../entities/singleElement";

// import { AiOutlinePlus } from "react-icons/ai";
// import { IconContext } from "react-icons";
import { Button, FormControl, InputGroup, FormGroup } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { createProject, createTask } from "../reducers/actions/projectsActions";
import { useLocation } from "react-router-dom";

interface INewTaskInputProps {
  name: string;
  [x: string]: string;
}

type CreateTask = ReturnType<typeof createTask>;
// useLocation<{ from: { pathname: string } }>()

const NewTaskInput = (props: any) => {
  const [name, setName] = useState<string>("");
  const dispatch = useDispatch();
  const location = useLocation();
  const projectID = location.state;
  // podac propsa uselocation i kombinacja na około... źle dziewiczysz i tyle...

  const abc = () => {
    dispatch<CreateTask>(
      createTask({
        name: name,
        id: projectID,
        key: Date.now(),
      } as ISingleTask)
    );
  };

  return (
    <form>
      <FormGroup role="form">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Project add"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => setName(e.target.value)}
          />
          <InputGroup.Append>
            <Button onClick={abc}>Button</Button>
          </InputGroup.Append>
        </InputGroup>
      </FormGroup>
    </form>
  );
};

export default NewTaskInput;
