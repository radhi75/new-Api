import { GET } from "../ActionType/types";

const initialState = {
  api: [],
};

const Redducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET:
      return { ...state, api: payload };

    default:
      return state;
  }
};
export default Redducer;
