import React, { Suspense, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import SearchBar from 'components/SearchBar'
import LNB from './LNB'

import styles from './search.module.scss'

const MainContent = React.lazy(() => import('./MainContent'))

const Search = () => {
  const [isBig, setIsBig] = useState(false)

  useEffect(() => {
    setIsBig(window.innerWidth > 1050)

    const handleResize = () => {
      setIsBig(window.innerWidth > 1050)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <div className={styles.searchPage}>
      {isBig ? (
        <>
          <div className={styles.container}>
            <SearchBar />
            <Suspense fallback={<div>loading...</div>}>
              <Routes>
                <Route path='/' element={<MainContent category='전체' />} />
                <Route path=':category' element={<MainContent />} />
              </Routes>
            </Suspense>
          </div>
          <LNB />
        </>
      ) : (
        <>
          <SearchBar />
          <LNB />
          <Suspense fallback={<div>loading...</div>}>
            <Routes>
              <Route path='/' element={<MainContent category='전체' />} />
              <Route path=':category' element={<MainContent />} />
            </Routes>
          </Suspense>
        </>
      )}
    </div>
  )
}

export default Search
