import { STOREAPIDATA } from "../constants/store";


export const storeApiData = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case STOREAPIDATA:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

