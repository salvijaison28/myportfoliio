const initialState = {
  message: "Redux connected!",
};

export default function rootReducer(state = initialState, action: any) {
  switch (action.type) {
    case "UPDATE_MESSAGE":
      return { ...state, message: action.payload };
    default:
      return state;
  }
}
