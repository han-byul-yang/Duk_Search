import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import SearchBar from 'components/SearchBar'
import LNB from './LNB'
import MainContent from './MainContent'

import styles from './search.module.scss'

const Search = () => {
  const [isMiddle, setIsMiddle] = useState(false)

  useEffect(() => {
    setIsMiddle(window.innerWidth > 1050)

    const handleResize = () => {
      setIsMiddle(window.innerWidth > 1050)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <div className={styles.searchPage}>
      <SearchBar />
      <LNB />
      <Routes>
        <Route path='/' element={<MainContent category='전체' />} />
        <Route path=':category' element={<MainContent />} />
      </Routes>
    </div>
  )
}

export default Search
