import { SearchTermContext } from '../context/SearchTermContext'
import { useContext } from 'react'

export const useSearchContext = () => {
  const context = useContext(SearchTermContext)

  if (!context) {
    throw new Error('useAuthContext must be inside an AuthContextProvider')
  }

  return context
}
