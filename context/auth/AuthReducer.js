import {  useContext } from 'react'
import { data } from "autoprefixer";
import { login } from "./AuthActions";


export const initialState = {
  user: null,
  isAuthenticated: false
};
 
export const AuthReducer = (initialState, action) => {

  switch (action.type) {
    case "LOGIN":
      console.log('l AuthReducer ACTION TYPE initial state', initialState)
      console.log('l AuthReducer ACTION TYPE', action.data.data.user)
      return {
       ...initialState,
       user: action.data.data.user,
       isAuthenticated: true
      };
    case "LOGOUT":
      return {
        ...initialState,
      };
 
    default:
      return
  }
};