import { useContext } from "react"
import GitHubAPI from "../../Context/GitHubAPI"
import { searchUsers } from "../../Context/GitHubActions"
function Pagination() {
  const { results, page, search, dispatch } = useContext(GitHubAPI)
  const pageCount = Math.ceil(results / 50)
  const nextPage = async () => {
    dispatch({ type: "SET_LOADING" })
    const data = await searchUsers(search, page + 1)
    dispatch({ type: "SET_PAGE", page: page + 1 })
    dispatch({
      type: "GET_USERS",
      users: data.items,
      results: data.total_count,
    })
  }
  const previousPage = async () => {
    dispatch({ type: "SET_LOADING" })
    const data = await searchUsers(search, page - 1)
    dispatch({ type: "SET_PAGE", page: page - 1 })
    dispatch({
      type: "GET_USERS",
      users: data.items,
      results: data.total_count,
    })
  }
  return (
    <div className='btn-group'>
      <button
        onClick={previousPage}
        className={page === 1 ? "btn btn-lg btn-disabled" : "btn btn-lg"}
      >
        Previous
      </button>
      <button className='btn btn-lg'>
        Page {page} of {pageCount}
      </button>
      <button onClick={nextPage} className='btn btn-lg'>
        Next
      </button>
    </div>
  )
}
export default Pagination
