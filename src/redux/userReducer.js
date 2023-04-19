import { localUserServ } from "../service/localUserService";
import { USER_LOGIN } from "./Constant/constant";

const initialState = {
  userInfo: localUserServ.get(),
};

let UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN:
      return { ...state, userInfo: payload };

    default:
      return state;
  }
};

export default UserReducer;
