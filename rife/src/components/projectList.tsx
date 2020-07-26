import React, { FC } from "react";
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
            <ListGroup.Item key={project.id} className="project">
              {project.name}
            </ListGroup.Item>
          );
        })}
    </ListGroup>
  );
};

export default ProjectList;
