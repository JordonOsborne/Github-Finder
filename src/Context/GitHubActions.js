const GitHubURL = process.env.REACT_APP_GITHUB_URL
const GitHubToken = process.env.REACT_APP_GITHUB_TOKEN

// SEARCH USERS
export const searchUsers = async (text, page) => {
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
  return { items, total_count }
}

// GET USER INFORMATION
export const getUser = async (login) => {
  const response = await fetch(`${GitHubURL}/users/${login}`, {
    headers: {
      Authorization: `token ${GitHubToken}`,
    },
  })
  if (response.status === 404) {
    return (window.location = "./NotFound")
  }
  const data = await response.json()
  return data
}

// GET USER REPOSITORIES
export const getRepos = async (login, page) => {
  const params = new URLSearchParams({
    sort: "udpated",
    direction: "desc",
    per_page: 10,
    page,
  })
  const response = await fetch(`${GitHubURL}/users/${login}/repos?${params}`, {
    headers: {
      Authorization: `token ${GitHubToken}`,
    },
  })
  const data = await response.json()
  return data
}
