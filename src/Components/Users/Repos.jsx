import PropTypes from "prop-types"
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa"

function Repos({ repos }) {
  return (
    <div className='rounded-lg shadow-lg card bg-base-100'>
      <div className='card-body'>
        <h2 className='text-3xl card-title mb-4 font-bold'>
          Most Recent Repositories
        </h2>
      </div>
      {repos.map((repo) => {
        return (
          <div className='card round-md mb-2 bg-gray-800 hover:bg-gray-900'>
            <div className='card-body'>
              <h3 className='text-xl mb-2 font-semibold'>
                <a href={repo.html_url} target='_blank' rel='noreferrer'>
                  <FaLink className='inline mr-1' />
                  {repo.name}
                </a>
              </h3>
              <p className='mb-3'>{repo.description}</p>
              <div>
                <div className='mr-2 badge badge-info badge-lg'>
                  <FaEye className='mr-2' />
                  {repo.watchers_count}
                </div>
                <div className='mr-2 badge badge-info badge-lg'>
                  <FaStar className='mr-2' />
                  {repo.stargazers_count}
                </div>
                <div className='mr-2 badge badge-error badge-lg'>
                  <FaInfo className='mr-2' />
                  {repo.open_issues}
                </div>
                <div className='mr-2 badge badge-warning badge-lg'>
                  <FaUtensils className='mr-2' />
                  {repo.forks}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
}

export default Repos
