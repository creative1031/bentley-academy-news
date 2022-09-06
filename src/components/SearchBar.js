import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSearchContext } from '../hooks/useSearchContext'

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const { changeTerm } = useSearchContext()

  const handleSubmit = (e) => {
    e.preventDefault()

    navigate('/search')
    changeTerm(searchTerm)
    setSearchTerm('')
  }

  return (
    <div className="bg-base-200">
      <div className="container py-5 lg:py-10">
        <div className="form-control bg-base-300 w-full md:w-1/2 mx-auto">
          <form onSubmit={handleSubmit} className="input-group">
            <input
              type="text"
              placeholder="キーワード検索"
              className="input input-bordered w-full text-base"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              required
            />
            <button className="btn btn-square bg-primary hover:bg-primary-focus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </form>
        </div>

        <div className="text-center mx-auto mt-8 px-5  max-w-screen-xl">
          <p className="text-sm">モデル検索</p>
          <ul className="mt-5 mx-auto grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:w-4/5">
            <li
              className="modelBtn"
              onClick={() => setSearchTerm('ベンテイガ')}
            >
              Bentayga
            </li>
            <li
              className="modelBtn"
              onClick={() => setSearchTerm('ベンテイガ EWB')}
            >
              Bentayga EWB
            </li>
            <li
              className="modelBtn"
              onClick={() => setSearchTerm('コンチネンタルGT')}
            >
              Continental GT
            </li>
            <li
              className="modelBtn"
              onClick={() => setSearchTerm('フライングスパー')}
            >
              Flying Spur
            </li>
            <li
              className="modelBtn"
              onClick={() => setSearchTerm('ミュルザンヌ')}
            >
              Mulsanne
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
