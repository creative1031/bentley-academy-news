import { useEffect, useState } from 'react'

export const useFiltering = (data, term, target) => {
  const [filteredItems, setFilteredItems] = useState([])

  useEffect(() => {
    let filtered = []

    if (target === 'title') {
      data.map((eachData) => {
        eachData.contents.map((content) => {
          if (content.title.includes(term) && !filtered.includes(eachData)) {
            filtered.push(eachData)
          }
          return filtered
        })
        return filtered
      })
    } else if (target === 'category') {
      data.map((eachData) => {
        eachData.contents.map((content) => {
          if (content.category.includes(term) && !filtered.includes(eachData)) {
            filtered.push(eachData)
          }
          return filtered
        })
        return filtered
      })
    }

    setFilteredItems(filtered)
  }, [data, term, target])

  console.log(filteredItems)

  return { filteredItems }
}
