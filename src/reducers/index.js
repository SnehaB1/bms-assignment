import { combineReducers } from "redux";
import appReducer from "./appReducer";
import { updateList } from "./assignment-1";
import { storeApiData } from "./assignment-2";
import { updateActiveTrailer } from "./activeTrailer";

const rootReducer = combineReducers({
  app: appReducer,
  assignment1: updateList,
  assignment2: storeApiData,
  activeTrailer: updateActiveTrailer
});

export default rootReducer;
