import PropTypes from "prop-types"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import GitHubAPI from "../../Context/GitHubAPI"
function UserCard({ login }) {
  const { fetchUser } = useContext(GitHubAPI)
  const [info, setInfo] = useState({})

  useEffect(() => {
    fetchUser(login).then((data) => setInfo(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Link
      className='card shadow-md compact side bg-base-50'
      to={`/user/${login}`}
      title={`View ${info.name} Profile`}
    >
      <div className='flex-column items-center card-body'>
        <div className='avatar'>
          <div className='rounded-full h-20 w-20'>
            <img src={info.avatar_url} alt='Profile Pic' />
          </div>
        </div>
        <div className='info flex-column justify-center text-center'>
          <h3 className='card-title text-lg text-center'>
            {info.name !== null ? info.name : login}
          </h3>
          <h4>{info.location}</h4>
        </div>
      </div>
    </Link>
  )
}

UserCard.propTypes = {
  login: PropTypes.string.isRequired,
}

export default UserCard
