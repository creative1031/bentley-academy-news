import ArchiveList from '../components/ArchiveList'
import Loading from '../components/Loading'
import { useFetch } from '../hooks/useFetch'

export default function Archives() {
  const url = 'data/bran-archives.json'
  const { data: archives, isPending, error } = useFetch(url)

  return (
    <div>
      {error && <p className="text-error text-center">{error}</p>}
      {isPending && <Loading />}
      {archives && (
        <div>
          <ArchiveList archives={archives} />
        </div>
      )}
    </div>
  )
}
