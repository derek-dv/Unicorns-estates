/* eslint-disable import/no-anonymous-default-export */
import * as allAuth from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case allAuth.LOGIN_SUCCESS:
      localStorage.setItem("token", payload.access);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        token: payload.access,
      };

    case allAuth.SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        loading: true,
      };

    case allAuth.LOGIN_FAIL:
    case allAuth.SIGNUP_FAIL:
    case allAuth.LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        loading: false,
      };
    default:
      return state;
  }
}
