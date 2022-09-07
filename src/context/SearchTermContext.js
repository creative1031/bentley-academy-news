import { createContext, useReducer } from 'react'

export const SearchTermContext = createContext()

const searchTermReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_TERM':
      return { ...state, searchTerm: action.payload, target: 'title' }
    case 'SEARCH_BY_CATEGORY':
      return { ...state, searchTerm: action.payload, target: 'category' }
    default:
      return state
  }
}

export function SearchTermProvider({ children }) {
  const [state, dispatch] = useReducer(searchTermReducer, {
    searchTerm: '',
    target: 'title',
  })

  const changeTerm = (searchTerm) => {
    dispatch({ type: 'CHANGE_TERM', payload: searchTerm })
  }

  const changeTarget = (categoryTerm) => {
    dispatch({ type: 'SEARCH_BY_CATEGORY', payload: categoryTerm })
  }

  return (
    <SearchTermContext.Provider value={{ ...state, changeTerm, changeTarget }}>
      {children}
    </SearchTermContext.Provider>
  )
}
