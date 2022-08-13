import Loading from '../components/Loading'
import { useFetch } from '../hooks/useFetch'
import NewRelease from '../components/NewRelease'
// import RelativeArticles from '../components/RelativeArticles'

export default function Home() {
  const url = 'data/bran-archives.json'
  const { data: latestIssue, isPending, error } = useFetch(url)

  return (
    <div>
      {error && <p className="text-error text-center">{error}</p>}
      {isPending && <Loading />}
      {latestIssue && (
        <div className="flex flex-col justify-between py-10">
          <NewRelease latestIssue={latestIssue[0]} />
          {/* <RelativeArticles /> */}
        </div>
      )}
    </div>
  )
}
