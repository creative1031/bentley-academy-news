import Loading from '../components/Loading'
import { useFetch } from '../hooks/useFetch'
import NewRelease from '../components/NewRelease'

export default function Home() {
  // const url = 'http://localhost:3000/data/bran-archives.json'
  const url =
    'https://bentley-academy-news.herokuapp.com/data/bran-archives.json'

  const { data: latestIssue, isPending, error } = useFetch(url)

  return (
    <div>
      {error && <p className="text-error text-center">{error}</p>}
      {isPending && <Loading />}
      {latestIssue && <NewRelease latestIssue={latestIssue[0]} />}
    </div>
  )
}
