import React, { FC } from "react";
import { ListGroup } from "react-bootstrap";
import { ISingleProject } from "../entities/singleElement";
import { useHistory } from "react-router-dom";
import { isLoaded, isEmpty } from "react-redux-firebase";
interface IProjectProps {
  projects?: any[];
}

const ProjectList: FC<IProjectProps> = ({ projects }) => {
  const history = useHistory();

  const goToTasks = (x: string) => {
    history.push("/tasks", x);
  };
  if (!isLoaded(projects)) {
    return <div>Loading...</div>;
  }

  // Show message if there are no todos
  if (isEmpty(projects)) {
    return <div>Todos List Is Empty</div>;
  }

  return (
    <div className="projects-wrapper">
      <ListGroup>
        {projects &&
          projects.map((project: ISingleProject, index: number) => (
            <ListGroup.Item
              onClick={() => goToTasks(project.id)}
              key={index}
              className="project"
            >
              {project.name}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
};

export default ProjectList;
