import { createContext, useContext, useReducer, useEffect } from "react";
import { AuthReducer, initialState } from './AuthReducer'
import { getUser } from './actions/index'

export const AuthStateContext = createContext(null);
export const AuthDispatchContext = createContext(null);

 
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    const authenticate = async () => {
      const data = await getUser()
      const { user } = await data.data
      user ? dispatch({type: 'AUTH_USER', user}) : dispatch({type: 'LOGOUT'})
    }
    authenticate()
    console.log('mounted AuthProvider state', state)
  
  }, [])
 
  return (
    <AuthDispatchContext.Provider value={dispatch}>
      <AuthStateContext.Provider value={state}>
          {children}
      </AuthStateContext.Provider>
    </AuthDispatchContext.Provider>
  )
}


