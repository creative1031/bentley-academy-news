import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="border-b border-accent">
      <div className="container flex flex-col md:flex-row justify-between items-center py-4 lg:py-6">
        <Link to="/" className="w-full md:basis-3/5">
          <h1 className="flex justify-between items-center md:justify-start">
            <img
              className="w-28 md:w-32"
              src="/images/BM_logo.jpg"
              alt="bentley logo"
            />
            <span className="text-secondary text-md lg:text-lg md:ml-5 tracking-wide">
              RETAILER ACADEMY NEWS
            </span>
          </h1>
        </Link>
        <nav className="flex justify-between w-full mt-5 md:mt-0 md: md:basis-2/5">
          <Link to="/archives" className="flex-1 mr-1">
            <button className="btn btn-primary w-full">アーカイブ</button>
          </Link>
          <Link to="/" className="flex-1 ml-1">
            <button className="btn btn-primary w-full">最新号</button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
