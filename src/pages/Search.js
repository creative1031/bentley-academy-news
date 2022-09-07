import { useFetch } from '../hooks/useFetch'
import { useSearchContext } from '../hooks/useSearchContext'

// components
import SearchResults from '../components/SearchResults'
import Loading from '../components/Loading'

export default function Search() {
  const { searchTerm, target } = useSearchContext()

  const url = 'data/bran-archives.json'
  const { data: results, isPending, error } = useFetch(url)

  return (
    <div>
      {error && <p className="text-error text-center">{error}</p>}
      {isPending && <Loading />}
      {results && (
        <div className="flex flex-col justify-between py-10 xl:flex-row">
          <SearchResults
            results={results}
            searchTerm={searchTerm}
            target={target}
          />
        </div>
      )}
    </div>
  )
}
