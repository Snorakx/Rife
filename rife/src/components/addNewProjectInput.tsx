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
  title: string;
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
    title: "",
  };
  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log("ssss");

    this.setState({
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };
  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    this.props.createProject(this.state);
    // console.log(event);
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
