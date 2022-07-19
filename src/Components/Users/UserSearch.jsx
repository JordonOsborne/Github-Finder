import { useState, useContext } from "react"
import Pagination from "./Pagination"
import GitHubAPI from "../../Context/GitHubAPI"
import AlertContext from "../../Context/AlertContext"
import { searchUsers } from "../../Context/GitHubActions"

function UserSearch() {
  const { users, dispatch } = useContext(GitHubAPI)
  const { setAlert } = useContext(AlertContext)
  const [text, setText] = useState("")
  const clearUsers = () => dispatch({ type: "CLEAR_USERS" })
  const handleChange = (e) => setText(e.target.value)
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (text === "") {
      setAlert("Please provide user name or location", "Search Error")
    } else {
      // Search Users
      dispatch({ type: "SET_LOADING" })
      dispatch({ type: "SEARCHING_FOR", search: text })
      const data = await searchUsers(text, 1)
      dispatch({
        type: "GET_USERS",
        users: data.items,
        results: data.total_count,
      })
      setText("")
    }
  }
  return (
    <div
      className={`grid grid-cols-1 mb-8 gap-4 ${
        users?.length > 0 && "xl:grid-cols-2"
      }`}
    >
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <div className='relative'>
            <input
              type='text'
              className='w-full pr-40 bg-gray-200 input input-lg text-black'
              placeholder='Search . . .'
              value={text}
              onChange={handleChange}
            />
            <button
              type='submit'
              className='btn btn-lg absolute top-0 right-0 rounded-l-none w-36'
            >
              Go
            </button>
          </div>
        </div>
      </form>
      {users.length > 0 && (
        <div className='btn-group justify-between'>
          <button onClick={clearUsers} className='btn btn-ghost btn-lg'>
            Clear
          </button>
          <Pagination />
        </div>
      )}
    </div>
  )
}
export default UserSearch
