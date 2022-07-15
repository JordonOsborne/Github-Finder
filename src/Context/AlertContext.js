import { createContext, useReducer } from "react"
import AlertReducer from "./AlertReducer"

const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
  // GET USERS (SEARCH USERS)
  const initialState = null

  const [state, dispatch] = useReducer(AlertReducer, initialState)

  // CREATE ALERT
  const setAlert = (message, type) => {
    dispatch({
      type: "SET_ALERT",
      payload: { message, type },
    })

    setTimeout(() => {
      dispatch({ type: "REMOVE_ALERT" })
    }, 3000)
  }

  return (
    <AlertContext.Provider
      value={{
        setAlert,
        alert: state,
      }}
    >
      {children}
    </AlertContext.Provider>
  )
}

export default AlertContext
