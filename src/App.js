import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import Header from './components/Header'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'

// pages
import Home from './pages/Home'
import Archives from './pages/Archives'
import Search from './pages/Search'

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [password, setPassword] = useState('')
  const [alert, setAlert] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    setPassword(e.target.value)

    if (password === 'bran2025') {
      setIsLogin(true)
      setAlert('')
    } else {
      setAlert('パスワードが間違っています')
    }
  }

  if (isLogin === false) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <img
          className="w-28 md:w-32 mb-10"
          src="/images/BM_logo.jpg"
          alt="bentley logo"
        />
        <h1 className="font-bentleyLight text-2xl mb-5 text-gray-500">
          RETAILOR ACADEMY NEWS
        </h1>
        <form onSubmit={submitHandler} className="w-80">
          <label className="form-control w-full max-w-lg">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="btn btn-primary w-full mt-5">Login</button>
          {alert && <p className="text-red-600 mt-5 text-center">{alert}</p>}
        </form>
      </div>
    )
  } else {
    return (
      <div className="font-bentleyLight font-light">
        <BrowserRouter>
          <div className="flex flex-col justify-between min-h-screen">
            <div>
              <Header />
              <SearchBar />
            </div>
            <main className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/archives" element={<Archives />} />
                <Route path="/search" element={<Search />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
