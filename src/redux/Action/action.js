import axios from "axios";
import { GET } from "../ActionType/types";

export const get_api = () => async (dispatch) => {
  try {
    const res = await axios.get("http://192.168.3.31:3333/api/getallpost");
    dispatch({ type: GET, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
// methode get with token
// export const get_api = () => async (dispatch) => {
//   const config = {
//     headers: {
//       token: localStorage.getItem("token"),
//     },
//   };
//   try {
//     const res = await axios.get("/", config);
//     dispatch({ type: GET, payload: res.data });
//   } catch (error) {
//     console.log(error);
//   }
// };
export const add_post = (data) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://192.168.3.31:3333/api/createnewpost",
      data
    );
    dispatch(get_api());
  } catch (error) {
    console.log(error);
  }
};
