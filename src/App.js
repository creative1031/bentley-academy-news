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

export default App
