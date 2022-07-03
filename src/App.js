import Header from "./Components/Header"
import Footer from "./Components/Footer"
import { BrowserRouter as Router, Route } from "react-router-dom"
function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Header />
        <main className='mx-auto px-3 pb-10'>Content</main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
