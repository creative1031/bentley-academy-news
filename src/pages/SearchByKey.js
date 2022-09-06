import { useFetch } from '../hooks/useFetch'
import { useSearchContext } from '../hooks/useSearchContext'

// components
import SearchResultsByKey from '../components/SearchResultsByKey'
import Loading from '../components/Loading'

export default function Search() {
  const { searchTerm } = useSearchContext()

  const url = 'data/bran-archives.json'
  const { data: results, isPending, error } = useFetch(url)

  return (
    <div>
      {error && <p className="text-error text-center">{error}</p>}
      {isPending && <Loading />}
      {results && (
        <div className="flex flex-col justify-between py-10 xl:flex-row">
          <SearchResultsByKey results={results} searchTerm={searchTerm} />
        </div>
      )}
    </div>
  )
}
