import SpinnerImg from "../Assets/Spinner.gif"
function Spinner() {
  return (
    <div className='w-100 mt-20'>
      <img
        width={180}
        className='text-center m-auto'
        src={SpinnerImg}
        alt='Loading . . .'
      />
    </div>
  )
}
export default Spinner
