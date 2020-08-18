export const signIn = (email: string, password: string) => {
  return (dispatch: any, getState: any, { getFirebase }: any) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("succes");
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((err: any) => {
        console.log("nope");

        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};
