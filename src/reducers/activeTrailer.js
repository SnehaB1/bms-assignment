import { UPDATEACTIVETRAILER } from "../constants/store";


export const updateActiveTrailer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATEACTIVETRAILER:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

