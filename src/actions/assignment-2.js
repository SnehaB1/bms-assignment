import { STOREAPIDATA, UPDATEACTIVETRAILER } from "../constants/store";

export const storeApiData = (list) => ({
  type: STOREAPIDATA,
  payload: list
});

export const updateActiveTrailerData = (data) => ({
  type: UPDATEACTIVETRAILER,
  payload: data
})