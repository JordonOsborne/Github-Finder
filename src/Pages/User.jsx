import { useEffect, useContext } from "react"
import { useParams, Link } from "react-router-dom"
import Spinner from "../Components/Spinner"
import { FaCodepen, FaUserFriends, FaUsers, FaStore } from "react-icons/fa"
import Repos from "../Components/Users/Repos"
import { getUser, getRepos } from "../Context/GitHubActions"
import GitHubAPI from "../Context/GitHubAPI"

function User() {
  const { isLoading, user, repos, dispatch } = useContext(GitHubAPI)
  const { login } = useParams()
  useEffect(() => {
    dispatch({ type: "SET_LOADING" })
    const getUserData = async () => {
      const userData = await getUser(login)
      dispatch({ type: "SET_USER", info: userData })
      const userRepos = await getRepos(login, 1)
      dispatch({ type: "SET_REPOS", info: userRepos })
    }
    getUserData()
  }, [dispatch, login])

  if (isLoading) {
    return <Spinner />
  } else {
    return (
      <>
        <div className='w-full mx-auto lg:w-10/12'>
          <div className='mb-4'>
            <Link to='/' className='btn btn-ghost'>
              Back to Search
            </Link>
          </div>

          <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
            <div className='custom-card-image mb-6 md:md-0'>
              <div className='rounded-lg shadow-xl card image-full'>
                <figure>
                  <img src={user?.avatar_url} alt='Profile' />
                </figure>
                <div className='card-body justify-end gap-0 p-2'>
                  <h2 className='card-title mb-0'>{user?.name}</h2>
                  <p>{user?.login}</p>
                </div>
              </div>
            </div>
            <div className='col-span-2'>
              <div className='mb-6'>
                <h1 className='text-3xl card-title'>{user?.name}</h1>
                <div className='ml-2 mr-1 badge badge-success'>
                  {user?.type}
                </div>
                {user?.hireable && (
                  <div className='mx-1 badge badge-info'>Hireable</div>
                )}
              </div>
              <p>{user?.bio}</p>
              <div className='mt-4 card-actions'>
                <a
                  href={user?.html_url}
                  target='_blank'
                  rel='noreferrer'
                  className='btn btn-outline'
                >
                  View on GitHub
                </a>
              </div>
              <div className='w-full rounded-lg shadow-md bg-base-100 stats'>
                {user?.location && (
                  <div className='stat'>
                    <div className='stat-title text-md'>Location</div>
                    <div className='stat-value text-lg'>{user?.location}</div>
                  </div>
                )}
                {user?.blog && (
                  <div className='stat'>
                    <div className='stat-title text-md'>Website</div>
                    <a
                      href={`https://${user?.blog}`}
                      target='_blank'
                      rel='noreferrer'
                      className='stat-value text-lg'
                    >
                      {user?.blog}
                    </a>
                  </div>
                )}
                {user?.twitter_username && (
                  <div className='stat'>
                    <div className='stat-title text-md'>Twitter</div>
                    <a
                      href={`https://twitter.com/${user?.twitter_username}`}
                      target='_blank'
                      rel='noreferrer'
                      className='stat-value text-lg'
                    >
                      {user?.twitter_username}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='w-full py-5 mb-4 rounded-lg shadow-md bg-base-100 stats'>
            <div className='stat'>
              <div className='stat-figure text-secondary'>
                <FaUsers className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Followers</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                {user?.followers.toLocaleString()}
              </div>
            </div>
            <div className='stat'>
              <div className='stat-figure text-secondary'>
                <FaUserFriends className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Following</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                {user?.following.toLocaleString()}
              </div>
            </div>
            <div className='stat'>
              <div className='stat-figure text-secondary'>
                <FaCodepen className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Public Repos</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                {user?.public_repos.toLocaleString()}
              </div>
            </div>
            <div className='stat'>
              <div className='stat-figure text-secondary'>
                <FaStore className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Gists</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                {user?.public_gists.toLocaleString()}
              </div>
            </div>
          </div>
          <Repos repos={repos} />
        </div>
      </>
    )
  }
}
export default User
