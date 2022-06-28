import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
function Header() {
  return (
    <header className='navbar bg-base-10'>
      <div className='container text-white'>
        <FaGithub className='text-5xl px-2' />
        <Link to='/' className='text-xl font-bold'>
          Github Finder
        </Link>
      </div>
      <nav className='flex-1'>
        <div className='flex justify-end'>
          <Link to='/' className='btn btn-ghost rounded-btn'>
            Home
          </Link>
          <Link to='/about' className='btn btn-ghost rounded-btn'>
            About
          </Link>
        </div>
      </nav>
    </header>
  )
}
export default Header
