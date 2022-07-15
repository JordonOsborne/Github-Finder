import { Link } from "react-router-dom"
function NotFound() {
  return (
    <div className='hero'>
      <div className='hero-content'>
        <div className='max-w-lg'>
          <h1 className='text-center text-8xl mb-4'>Oops!</h1>
          <h1 className='text-center text-5xl mb-4'>404 - Page Not Found</h1>
          <p className='text-center text-2xl'>
            The page you are looking forward was not found please return to the{" "}
            <Link to='/'>home page</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}
export default NotFound
