// import { useState, useEffect, useCallback } from 'react'
import PDFicon from '../assets/pdf-icon.svg'
import { useFiltering } from '../hooks/useFiltering'

function SearchResults({ results, searchTerm, target }) {
  const { filteredItems } = useFiltering(results, searchTerm, target)

  if (filteredItems.length > 0) {
    return (
      <div className="w-full">
        {filteredItems &&
          filteredItems.map((result) => (
            <div
              key={result.issue}
              className="py-5 border-b border-gray-200 font-light text-gray-700"
            >
              <div className="flex flex-col lg:flex-row lg:items-center">
                <a
                  href={result.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="text-black lg:w-64"
                >
                  <img src={PDFicon} alt="" className="w-7 inline mr-2" />
                  <span>No.{result.issue} - </span>
                  <span>
                    {result.year}年{result.month}月
                  </span>
                </a>
                <ul className="mt-3 lg:mt-0">
                  {result.contents
                    .filter((content) =>
                      target === 'title'
                        ? content.title.includes(searchTerm)
                        : content.category.includes(searchTerm)
                    )
                    .map((filteredTitle, index) => (
                      <div key={index} className="flex items-start my-2">
                        <span className="text-xs bg-gray-400 px-2 py-1 rounded-sm mr-2 text-white">
                          P{filteredTitle.page}
                        </span>
                        <li key={index} className="text-left">
                          {filteredTitle.title}
                        </li>
                      </div>
                    ))}
                </ul>
              </div>
            </div>
          ))}
      </div>
    )
  } else {
    return (
      <div className="w-full">
        「{searchTerm}」
        を含むタイトルはありませんでした。キーワードを変えて検索して下さい。
      </div>
    )
  }
}

export default SearchResults
