import { useSearchContext } from '../hooks/useSearchContext'
import { useNavigate } from 'react-router-dom'

const articles = [
  { title: 'Beyond 100', src: 'beyond100', term: 'BEYOND 100' },
  {
    title: '基礎知識',
    src: 'knowledge',
    term: 'PRODUCT KNOWLEDGE',
  },
]

export default function ArticlesList() {
  const { changeTerm } = useSearchContext()
  const navigate = useNavigate()
  const handleClick = (term) => {
    changeTerm(term)
    navigate('/searchbykey')
  }

  return (
    <div className="py-5 border-t">
      <h3 className="text-center text-xl my-5 md:mb-7 xl:mt-5">PICK UP</h3>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4 xl:grid-cols-5">
        {articles.map((article) => (
          <div key={article.title}>
            <li
              className={`bg-${article.src} bg-no-repeat bg-cover bg-center w-full h-24 cursor-pointer md:h-24 lg:h-28 xl:h-32`}
              onClick={() => handleClick(article.term)}
            ></li>
            <p className="text-center text-sm my-2">{article.title}</p>
          </div>
        ))}
      </ul>
    </div>
  )
}
