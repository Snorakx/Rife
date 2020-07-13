import * as actiontypes from "../actions/types/types";
import { ISingleElement } from "../entities/singleElement";

export const setNewElemTodoList = (newElem: ISingleElement) => ({
  type: actiontypes.SET_NEW_ELEM,
  newElem,
});
