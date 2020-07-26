import React, { FC } from "react";
// import { AiOutlinePlus } from "react-icons/ai";
// import { IconContext } from "react-icons";
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
            <div
              key={project.id}
              style={{ marginBottom: "5px", backgroundColor: "pink" }}
              onClick={goToTasks}
            >
              {project.name}
              <br />
              {project.id}
            </div>
          );
        })}
    </ListGroup>
  );
};

export default ProjectList;
