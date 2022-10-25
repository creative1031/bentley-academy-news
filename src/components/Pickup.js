import { useSearchContext } from '../hooks/useSearchContext'
import { useNavigate } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const articles = [
  { title: 'Beyond 100', src: 'beyond100', term: 'BEYOND 100' },
  {
    title: '基礎知識',
    src: 'knowledge',
    term: 'PRODUCT KNOWLEDGE',
  },
  {
    title: 'マリナー',
    src: 'mulliner',
    term: 'MULLINER',
  },
  {
    title: 'ベントレーの歴史',
    src: 'heritage',
    term: 'HERITAGE',
  },
  {
    title: '環境',
    src: 'environment',
    term: 'ENVIRONMENT',
  },
]

export default function ArticlesList() {
  const { changeTarget } = useSearchContext()
  const navigate = useNavigate()
  const handleClick = (term) => {
    changeTarget(term)
    navigate('/search')
  }

  return (
    <div className="py-5 border-t">
      <h3 className="text-center text-xl my-5 md:mb-7 xl:mt-5">PICK UP</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 xl:gap-8 lg:grid-cols-4 xl:grid-cols-5">
        {articles.map((article) => (
          <div key={article.title}>
            <LazyLoadImage
              className="w-full cursor-pointer"
              src={`/images/${article.src}.jpg`}
              alt={article.title}
              onClick={() => handleClick(article.term)}
              effect="blur"
            />
            <p className="text-center text-sm my-2">{article.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
