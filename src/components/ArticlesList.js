import { useSearchContext } from '../hooks/useSearchContext'
import { useNavigate } from 'react-router-dom'

const articles = [
  { title: 'Beyond 100', src: 'beyond100', term: 'BEYOND 100' },
  {
    title: 'Product Knowledge',
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
      <h3 className="text-center text-xl mb-5 md: mb-7 xl:mt-5">PICK UP</h3>
      <ul className="grid md:grid-cols-2 gap-10 lg:grid-cols-3 xl:grid-cols-4">
        {articles.map((article) => (
          <div key={article.title}>
            <li
              className={`bg-${article.src} bg-no-repeat bg-cover bg-center w-full h-40 cursor-pointer `}
              onClick={() => handleClick(article.term)}
            ></li>
            <p className="text-center mt-2">{article.title}</p>
          </div>
        ))}
      </ul>
    </div>
  )
}
