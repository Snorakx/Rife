import React, { FC } from "react";
// import { AiOutlinePlus } from "react-icons/ai";
// import { IconContext } from "react-icons";
import { ListGroup } from "react-bootstrap";
import { ISingleProject } from "../entities/singleElement";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
interface ITaskProps {
  tasks?: any[];
}

const TaskList: FC<ITaskProps> = ({ tasks }) => {
  const history = useHistory();
  const location = useLocation();
  const myparam = location.state;

  return (
    <ListGroup>
      {tasks &&
        tasks.map((task: ISingleProject) => {
          return (
            <div
              key={task.key}
              style={{ marginBottom: "5px", backgroundColor: "pink" }}
              onClick={() => console.log(myparam)}
            >
              {task.name}
              <br />
              {task.id}
            </div>
          );
        })}
    </ListGroup>
  );
};

export default TaskList;
