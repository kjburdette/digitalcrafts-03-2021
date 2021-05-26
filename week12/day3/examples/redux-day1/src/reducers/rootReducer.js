const initialState = {
    counter: 0,
    userName: "joe",
    address: {},
    poop: "💩",
  };
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case "ADD":
        return { ...state, counter: state.counter + 1 };
  
      case "SUBTRACT":
        return { ...state, counter: state.counter - 1 };
  
      case "CHANGE_POOP_TO_DUCK":
        return { ...state, poop: "🦆" };
      default:
        return state;
    }
  }
  
  export default rootReducer;