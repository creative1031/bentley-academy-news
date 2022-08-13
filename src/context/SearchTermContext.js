import { createContext, useReducer } from 'react'

export const SearchTermContext = createContext()

const searchTermReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_TERM':
      return { ...state, searchTerm: action.payload }
  }
}

export function SearchTermProvider({ children }) {
  const [state, dispatch] = useReducer(searchTermReducer, { searchTerm: '' })

  const changeTerm = (searchTerm) => {
    dispatch({ type: 'CHANGE_TERM', payload: searchTerm })
  }

  return (
    <SearchTermContext.Provider value={{ ...state, changeTerm }}>
      {children}
    </SearchTermContext.Provider>
  )
}
