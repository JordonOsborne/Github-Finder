import { createContext, useReducer } from "react"
import GitHubReducer from "./GitHubReducer"

const GitHubAPI = createContext()
const GitHubURL = process.env.REACT_APP_GITHUB_URL
const GitHubToken = process.env.REACT_APP_GITHUB_TOKEN

export const GitHubProvider = ({ children }) => {
  // GET USERS (SEARCH USERS)
  const initialState = {
    users: [],
    user: {},
    isLoading: false,
    searchFor: "",
    results: 0,
    page: 1,
  }

  const [state, dispatch] = useReducer(GitHubReducer, initialState)

  // GET USERS (TESTING PURPOSES ONLY)
  const fetchUsers = async () => {
    setLoading()
    console.log("Fetching User Info . . .")
    const response = await fetch(`${GitHubURL}/users`, {
      headers: {
        Authorization: `token ${GitHubToken}`,
      },
    })
    const data = await response.json()
    dispatch({
      type: "GET_USERS",
      users: data,
    })
  }

  // SEARCH USERS
  const searchUsers = async (text, page) => {
    setLoading()
    setSearchFor(text)
    console.clear()
    const params = new URLSearchParams({
      q: text,
      per_page: 50,
      page,
    })
    console.log("Searching Users . . .")
    const response = await fetch(`${GitHubURL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GitHubToken}`,
      },
    })
    const { items, total_count } = await response.json()
    console.log("Total Count: ", total_count)
    dispatch({
      type: "GET_USERS",
      users: items,
      results: total_count,
    })
  }

  // SET SEARCH FOR
  const setSearchFor = (text) =>
    dispatch({ type: "SEARCHING_FOR", search: text })

  // SET LOADING
  const setLoading = () => dispatch({ type: "SET_LOADING" })

  // GET USER INFORMATION
  const fetchUser = async (login) => {
    const response = await fetch(`${GitHubURL}/users/${login}`, {
      headers: {
        Authorization: `token ${GitHubToken}`,
      },
    })
    if (response.status === 404) {
      return (window.location = "./NotFound")
    }
    const data = await response.json()
    dispatch({ type: "SET_USER", info: data })
    return data
  }

  // CLEAR USERS ARRAY
  const clearUsers = () => dispatch({ type: "CLEAR_USERS" })

  // USERS PAGINATION
  const changePage = (page) => {
    dispatch({ type: "USERS_PAGINATION", page })
    searchUsers(state.search, page)
  }

  return (
    <GitHubAPI.Provider
      value={{
        setLoading,
        fetchUsers,
        searchUsers,
        clearUsers,
        changePage,
        fetchUser,
        users: state.users,
        user: state.user,
        isLoading: state.isLoading,
        results: state.results,
        search: state.search,
        page: state.page,
      }}
    >
      {children}
    </GitHubAPI.Provider>
  )
}

export default GitHubAPI
