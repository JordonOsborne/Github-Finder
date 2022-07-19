const GitHubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.users,
        results: action.results,
        isLoading: false,
      }
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      }
    case "SEARCHING_FOR":
      return {
        ...state,
        search: action.search,
      }
    case "SET_USER":
      return {
        ...state,
        user: action.info.user,
        repos: action.info.repos,
        isLoading: false,
      }
    case "SET_PAGE":
      return {
        ...state,
        page: action.page,
      }
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
        search: "",
        page: 1,
      }
    default:
      return state
  }
}

export default GitHubReducer
