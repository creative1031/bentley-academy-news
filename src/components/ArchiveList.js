import PDFicon from '../assets/pdf-icon.svg'

export default function ArchiveList({ archives }) {
  return (
    <div className="py-10">
      <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-3 md:gap-10 lg:grid-cols-4 xl:grid-cols-5">
        {archives.map((archive) => (
          <div key={archive.issue}>
            <li className="mb-3">
              <label htmlFor={archive.issue}>
                <img
                  src={archive.image}
                  alt={archive.issue}
                  className="border border-gray-400 cursor-pointer mb-2 loading-image"
                  loading="lazy"
                />
                <p className="text-center mx-auto text-sm text-gray-600 font-light">
                  <span>No.{archive.issue} - </span>
                  <span>
                    {archive.year}年{archive.month}月
                  </span>
                </p>
              </label>
            </li>

            {/* modal */}
            <input
              type="checkbox"
              id={archive.issue}
              className="modal-toggle"
            />
            <div className="modal">
              <div className="modal-box relative rounded p-10">
                <label
                  htmlFor={archive.issue}
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </label>
                <a
                  href={archive.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center mb-5 pb-2 border-b-2"
                >
                  <img src={PDFicon} alt="" className="w-8 mr-2" />
                  <div className="text-lg">
                    No.{archive.issue} - {archive.year}年{archive.month}月
                  </div>
                </a>
                <ul className="pl-10">
                  {archive.contents.map((content, index) => (
                    <li key={index} className=" -indent-10 mb-1 font-light">
                      <span className="text-xs bg-gray-400 px-2 py-1 rounded-sm mr-2 text-white">
                        P{content.page}
                      </span>
                      {content.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  )
}
