const initState = {
  projects: [
    { id: "1", name: "help me find peach" },
    { id: "2", name: "collect all the stars" },
    { id: "3", name: "egg hunt with yoshi" },
  ],
};

const projectReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("create project", action.project);

      return state;

    default:
      return state;
  }
};

export default projectReducer;
