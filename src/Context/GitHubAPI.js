import { createContext, useReducer } from "react"
import GitHubReducer from "./GitHubReducer"

const GitHubAPI = createContext()

export const GitHubProvider = ({ children }) => {
  // GET USERS (SEARCH USERS)
  const initialState = {
    users: [],
    user: {},
    isLoading: false,
    searchFor: "",
    results: 0,
    page: 1,
    repos: [],
  }

  const [state, dispatch] = useReducer(GitHubReducer, initialState)

  return (
    <GitHubAPI.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GitHubAPI.Provider>
  )
}

export default GitHubAPI
