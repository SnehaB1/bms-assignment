// import { STORE_USER } from "../constants/redux";

const appReducer = (state = null, action) => {
  const { type, ...restProps } = action;
  
  switch (type) {
    case "STORE_USER":
      state = {
        ...state,
        ...restProps
      };
      break;
    default: {
        state = {
            ...state
        }
    }
  }
  return state;
};

export default appReducer;