import { createContext, useContext, useReducer } from "react";
import { AuthReducer, initialState } from './AuthReducer'


export const AuthStateContext = createContext(null);
export const AuthDispatchContext = createContext(null);

 
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
 
  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}


