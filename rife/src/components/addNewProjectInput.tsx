import React, { Component } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { ISingleProject } from "../entities/singleElement";

// import { AiOutlinePlus } from "react-icons/ai";
// import { IconContext } from "react-icons";
import { Button, FormControl, InputGroup, FormGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { createProject } from "../reducers/actions/projectsActions";

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
        <FormGroup role="form">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Project add"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                this.handleChange(e);
              }}
            />
            <InputGroup.Append>
              <Button type="submit" variant="outline-secondary">
                Button
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </FormGroup>
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
