import React, { FC } from "react";
import { ListGroup } from "react-bootstrap";
import { ISingleProject } from "../entities/singleElement";
import { useHistory } from "react-router-dom";
interface IProjectProps {
  projects?: any[];
}

const ProjectList: FC<IProjectProps> = ({ projects }) => {
  const history = useHistory();

  const goToTasks = () => {
    history.push("/tasks");
  };

  return (
    <ListGroup>
      {projects &&
        projects.map((project: ISingleProject) => {
          return (
<<<<<<< HEAD
            <div
              key={project.id}
              style={{ marginBottom: "5px", backgroundColor: "pink" }}
              onClick={goToTasks}
            >
              {project.name}
              <br />
              {project.id}
            </div>
=======
            <ListGroup.Item key={project.id} className="project">
              {project.name}
            </ListGroup.Item>
>>>>>>> bc259f8ad95c0f4ca6b6ab239723653aa2ac3dd8
          );
        })}
    </ListGroup>
  );
};

export default ProjectList;
