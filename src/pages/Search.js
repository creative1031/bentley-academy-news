import { useFetch } from '../hooks/useFetch'
import { useContext } from 'react'
import { SearchTermContext } from '../context/SearchTermContext'

// components
import SearchResults from '../components/SearchResults'
import Loading from '../components/Loading'

export default function Search() {
  const { searchTerm } = useContext(SearchTermContext)

  const url = 'data/bran-archives.json'
  const { data: results, isPending, error } = useFetch(url)

  return (
    <div>
      {error && <p className="text-error text-center">{error}</p>}
      {isPending && <Loading />}
      {results && (
        <div className="flex flex-col justify-between py-10 xl:flex-row">
          <SearchResults results={results} searchTerm={searchTerm} />
        </div>
      )}
    </div>
  )
}
