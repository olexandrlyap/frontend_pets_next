import { data } from "autoprefixer";
import { login } from "./AuthActions";

export const initialState = {
  user: null,
  isAuthenticated: false
};
 
export const AuthReducer = async (initialState, action) => {
  switch (action.type) {
    case "LOGIN":
        console.log('l AuthReducer ACTION TYPE initial state', initialState)
      console.log('l AuthReducer ACTION TYPE', action.data.data.user)
      return {
        ...initialState,
        user: await action.data.data.user
      };

    case "LOGOUT":
      return {
        ...initialState,
      };
 
    default:
      return
  }
};