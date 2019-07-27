import { UPDATELIST } from "../constants/store";

export const updateList = (list) => ({
    type: UPDATELIST,
    payload: list
  });