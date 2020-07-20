import React, { FC } from "react";
// import { AiOutlinePlus } from "react-icons/ai";
// import { IconContext } from "react-icons";
import { ListGroup } from "react-bootstrap";
import { ISingleProject } from "../entities/singleElement";
interface IProjectProps {
  projects?: any[];
}

const ProjectList: FC<IProjectProps> = ({ projects }) => {
  return (
    <ListGroup>
      {projects &&
        projects.map((project: ISingleProject) => {
          return (
            <ListGroup.Item key={project.id} variant="primary">
              {project.name}
              <br />
              {project.id}
            </ListGroup.Item>
          );
        })}
    </ListGroup>
  );
};

export default ProjectList;
