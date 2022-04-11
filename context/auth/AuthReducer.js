
import { logout } from "./actions";


export const initialState = {
  user: null,
  isAuthenticated: false,
  logout
};
 
export const AuthReducer =  (initialState, action) => {

  switch (action.type) {
    case "LOGIN":
      return {
       ...initialState,
       user: action.data.data.user,
       isAuthenticated: true
      };
    case "LOGOUT":
      console.log('logout reducer')
      return {
        ...initialState,
        user: null,
        isAuthenticated: false
      };
    case "AUTH_USER":
      console.log('auth user reducer', action.user)
      return {
        ...initialState,
        user: action.user,
        isAuthenticated: true
      }

    default:
      return
  }
};