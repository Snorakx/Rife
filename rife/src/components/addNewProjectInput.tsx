import React, { Component } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { ISingleProject } from "../entities/singleElement";

// import { AiOutlinePlus } from "react-icons/ai";
// import { IconContext } from "react-icons";
import { Button, FormControl, InputGroup, FormGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { createProject } from "../reducers/actions/projectsActions";
import {AiOutlinePlus} from 'react-icons/ai';

interface INewProjectInputProps {
  name: string;
  [x: string]: string;
}
interface IProps {
  handleSubmit(event: React.FormEvent<HTMLInputElement>): void;
}

class NewProjectInput extends Component<
  ISingleProject,
  INewProjectInputProps,
  IProps
> {
  state = {
    name: "",
  };
  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log("asd");
    this.setState({
      name: event.currentTarget.value,
    });
  };
  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    this.props.createProject(this.state);
  };
  render() {
    return (
      <form
        onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
          this.handleSubmit(event)
        }
      >
        <input
          className="project-input"
          placeholder="Dodaj nowy projekt"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            this.handleChange(e);
          }}
        />
        <Button className="add-project-btn" type="submit">
          <AiOutlinePlus />
        </Button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    createProject: (project: ISingleProject) =>
      dispatch(createProject(project)),
  };
};

export default connect(null, mapDispatchToProps)(NewProjectInput);
