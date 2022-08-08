import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="border-b border-accent">
      <div className="container flex justify-between items-center h-32">
        <Link to="/">
          <h1 className="flex items-center">
            <img
              className="w-28 md:w-32 lg:w-36"
              src="/images/BM_logo.jpg"
              alt="bentley logo"
            />
            <span className="text-secondary text-lg ml-5 tracking-wide">
              RETAILER ACADEMY NEWS
            </span>
          </h1>
        </Link>
        <nav>
          <Link to="/archives">
            <button className="btn btn-primary w-40">Archives</button>
          </Link>
          <Link to="/">
            <button className="btn btn-primary ml-5 w-40">Latest</button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
