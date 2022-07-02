import { useEffect, useState } from "react"
import Spinner from "../Spinner"
function Results() {
  useEffect(() => {
    fetchData()
  }, [])
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_API}/users`, {
      headers: { Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}` },
    })
    const data = await response.json()
    setUsers(data)
    setIsLoading(false)
  }
  if (!isLoading) {
    return (
      <>
        <h1>Users</h1>
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4'>
          {users.map((user) => {
            return (
              <img key={user.id} src={user.avatar_url} alt={user.avatar_url} />
            )
          })}
        </div>
      </>
    )
  } else {
    return <Spinner />
  }
}
export default Results
