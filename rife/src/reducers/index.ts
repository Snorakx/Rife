import { combineReducers } from "redux";

import projectList from "./reducers";
import { ISingleElement } from "../entities/singleElement";

export default combineReducers({
  projectList,
});

export interface IState {
  temp: ISingleElement;
}
