const initialValue = {
  enableSideBar: false,
};

const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case "enableSideNar": {
      return { enableSideBar: (state.enableSideBar = true) };
    }
    default:
      return state;
  }
};
export default reducer;
