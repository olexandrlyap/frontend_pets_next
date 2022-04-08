import { createContext, useContext, useReducer } from "react";
import { AuthReducer, initialState } from './AuthReducer'


export const AuthStateContext = createContext(null);
export const AuthDispatchContext = createContext(null);

 
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
 
  return (
    <AuthDispatchContext.Provider value={dispatch}>
      <AuthStateContext.Provider value={state}>
          {children}
      </AuthStateContext.Provider>
    </AuthDispatchContext.Provider>
  )
}


