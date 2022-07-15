import { useContext } from "react"
import GitHubAPI from "../../Context/GitHubAPI"
function Pagination() {
  const { results, page, changePage } = useContext(GitHubAPI)
  const pageCount = Math.ceil(results / 50)
  const nextPage = () => changePage(page + 1)
  const previousPage = () => changePage(page - 1)
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
