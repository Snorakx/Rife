import { ISingleProject, ISingleTask } from "../../entities/singleElement";
import { getFirebase } from "react-redux-firebase";
import firebase from "firebase";

let userUID = firebase.auth().currentUser?.uid;

export const createProject = (project: ISingleProject) => {
  return (dispatch: any, getState: any, { getFirebase, getFirestore }: any) => {
    const dbConnect = getFirebase().firestore();
    dbConnect
      .collection("users")
      .doc(firebase.auth().currentUser?.uid)
      .collection("projects")
      .add({
        ...project,
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(
        (err: Error) => {
          dispatch({ type: "CREATE_PROJECT_ERROR", err });
        },
        { merge: true }
      );
  };
};
export const createTask = (task: ISingleTask) => {
  return (dispatch: any, getState: any, { getFirebase, getFirestore }: any) => {
    const dbConnect = getFirebase().firestore();
    dbConnect
      .collection("users")
      .doc(firebase.auth().currentUser?.uid)
      .collection("projects")
      .doc(task.id)
      .collection("tasks")
      .add({
        ...task,
      })
      .then(() => {
        dispatch({ type: "CREATE_TASK", task });
      })
      .catch((err: Error) => {
        dispatch({ type: "CREATE_TASK_ERROR", err });
      });
  };
};
