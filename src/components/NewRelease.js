import PDFicon from '../assets/pdf-icon.svg'

export default function NewRelease({ latestIssue }) {
  return (
    <div className="flex flex-col mb-10 lg:flex-row xl:mb-0">
      <a href={latestIssue.pdf} className="lg:mr-10">
        <img
          src={latestIssue.image}
          alt=""
          className="mx-auto w-4/5 border border-gray-400 md:w-96"
        />
      </a>
      <div className="pt-8">
        <div>
          <div className="border-b border-gray-400 mb-5 pb-2 flex justify-between items-center">
            <div className="flex">
              <a href={latestIssue.pdf}>
                <img src={PDFicon} alt="" className="w-8 mr-2" />
              </a>
              <h2 className="text-2xl">
                <span className="text-sm mr-2">ISSUE</span>No.
                {latestIssue.issue}{' '}
              </h2>
            </div>
            <p className="text-md mt-1">
              {latestIssue.year}年{latestIssue.month}月号
            </p>
          </div>

          <ul>
            {latestIssue.contents.map((content, index) => (
              <li key={index} className="mb-1 pl-5 -indent-5 font-light">
                <span className="text-gray-400 mr-2">■</span>
                {content.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}