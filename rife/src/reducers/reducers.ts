import * as actionTypes from "../actions/types/types";
import { ISingleElement } from "../entities/singleElement";
// import { ISingleUserList, InGreenElement } from "../entities/todoSingleEl";

export interface IReducer {
  temp: ISingleElement[];
}

const defaultState = (): IReducer => ({
  temp: [],
});

export default (state = defaultState(), action: any): IReducer => {
  switch (action.type) {
    case actionTypes.SET_NEW_ELEM: {
      return {
        ...state,
        temp: [...state.temp, action.list],
      };
    }
    default: {
      return state;
    }
  }
};
