import {
  SIGNIN_USER,
  SIGNIN_USER_SUCCESS,
} from "../constants/index";

export const userActionSignIn = (user) => {
  console.log("hola action-->");
  return {
    type: SIGNIN_USER,
    payload: user,
  };
};
export const userActionSignInSuccess = (token) => {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: token,
  };
};