import { ISingleProject } from "../../entities/singleElement";

export const createProject = (project: ISingleProject) => {
  return (dispatch: any, getState: any) => {
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
