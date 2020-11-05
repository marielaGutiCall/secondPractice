import {
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
} from "../constants/index";

export const userActionSignUP = (user) => {
  return {
    type: SIGNUP_USER,
    payload: user,
  };
};
export const userActionSignUPSuccess = (token) => {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: token,
  };
};