const initState = {
  tasks: [
    { id: "1", name: "help me find peach" },
    { id: "2", name: "collect all the stars" },
    { id: "3", name: "egg hunt with yoshi" },
  ],
};

const taskReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "CREATE_Task":
      console.log("create project", action.task);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("error", action.err);
      return state;
    default:
      return state;
  }
};

export default taskReducer;
