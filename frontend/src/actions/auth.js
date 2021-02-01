import axios from "axios";
import setAlert from "./alert";
import * as all from "./types";

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(
      "http://localhost:8000/api/token/",
      body,
      config
    );
    dispatch({
      type: all.LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert("Authenticated successfully", "success"));
  } catch (err) {
    dispatch({
      type: all.LOGIN_FAIL,
    });
    dispatch(setAlert("Error authenticating", "error"));
  }
};

export const signup = (name, email, password, password2) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, email, password, password2 });
  axios
    .post("http://localhost:8000/api/accounts/signup/", body, config)
    .then((res) => {
      dispatch({
        type: all.SIGNUP_SUCCESS,
        payload: res.data,
      });

      if (res.data.error) return dispatch(setAlert(res.data.error, "error"));

      dispatch(login(email, password));
    })
    .catch((err) => {
      dispatch({ type: all.SIGNUP_FAIL });
      dispatch(setAlert("Error authenticating", "error"));
    });
};

export const logout = () => (dispatch) => {
  dispatch(setAlert("logout successfully", "success"));
  dispatch({ type: all.LOGOUT });
};
