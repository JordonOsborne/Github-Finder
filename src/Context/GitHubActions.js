import axios from "axios"
const GitHubURL = process.env.REACT_APP_GITHUB_URL
const GitHubToken = process.env.REACT_APP_GITHUB_TOKEN

const GitHub = axios.create({
  baseURL: GitHubURL,
  headers: { Authorization: `token ${GitHubToken}` },
})

// SEARCH USERS
export const searchUsers = async (text, page) => {
  const params = new URLSearchParams({
    q: text,
    per_page: 50,
    page,
  })
  const response = await GitHub.get(`/search/users?${params}`)
  const { items, total_count } = response.data
  return { items, total_count }
}

// GET USER
export const getUser = async (login) => {
  const response = await GitHub.get(`/users/${login}`)
  return response.data
}

// GET USER AND REPOSITORIES
export const getUserAndRepos = async (login, page) => {
  const params = new URLSearchParams({
    sort: "udpated",
    direction: "desc",
    per_page: 10,
    page,
  })
  const [user, repos] = await Promise.all([
    GitHub.get(`/users/${login}`),
    GitHub.get(`/users/${login}/repos?${params}`),
  ])

  return { user: user.data, repos: repos.data }
}
