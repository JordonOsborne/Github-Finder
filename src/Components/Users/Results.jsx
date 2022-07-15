import { useContext } from "react"
import Spinner from "../Spinner"
import UserCard from "./UserCard"
import GitHubAPI from "../../Context/GitHubAPI"
function Results() {
  const { users, isLoading } = useContext(GitHubAPI)

  if (!isLoading) {
    return (
      <>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-6 md:grid-cols-4'>
          {users.map((user) => {
            return <UserCard key={user.id} login={user.login} />
          })}
        </div>
      </>
    )
  } else {
    return <Spinner />
  }
}
export default Results
