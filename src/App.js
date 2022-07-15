import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Pages/Hone"
import About from "./Pages/About"
import User from "./Pages/User"
import NotFound from "./Pages/NotFound"
import Alert from "./Components/Alert"
import Footer from "./Components/Footer"
import { GitHubProvider } from "./Context/GitHubAPI"
import { AlertProvider } from "./Context/AlertContext"

function App() {
  return (
    <GitHubProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Header />
            <main className='mx-auto px-3 pb-10 min-w-[50%]'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GitHubProvider>
  )
}

export default App
