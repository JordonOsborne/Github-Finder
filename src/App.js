import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Pages/Hone"
import About from "./Pages/About"
import NotFound from "./Pages/NotFound"
import Footer from "./Components/Footer"
function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Header />
        <main className='mx-auto px-3 pb-10'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
