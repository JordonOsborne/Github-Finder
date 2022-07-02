import Results from "../Components/Users/Results"
function Hone() {
  return (
    <>
      <h1 className='text-2xl text-center'>Search for Github Users</h1>
      <input type='text' placeholder='Enter User Name . . .' />
      <Results />
    </>
  )
}
export default Hone
