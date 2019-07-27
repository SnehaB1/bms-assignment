import { UPDATELIST } from "../constants/store";


export const updateList = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATELIST:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

