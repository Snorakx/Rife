import authReducer from "./authReducer";
import projectReducer from "./projectReducers";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  tasks: taskReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;

// the key name will be the data property on the state object
