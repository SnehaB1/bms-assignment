import { trailersApi, proxyurl } from "../constants";


export const getTrailersData = () =>
  async (dispatch) => {
    try {
      const response = await fetch(proxyurl+ trailersApi, {
        method: "GET",
        headers: {
          "Content-type": "text/plain"
        }
      })
      const result = await response.json();
      return result;
    } catch (error) {
      console.log("api-error", error);
      return false;
    }
  };
