import { Route, Routes } from 'react-router-dom'

import SearchBar from 'components/SearchBar'
import LNB from './LNB'
import MainContent from './MainContent'

import styles from './search.module.scss'

const Search = () => {
  return (
    <div className={styles.searchPage}>
      <SearchBar />
      <LNB />
      <Routes>
        <Route path=':category' element={<MainContent />} />
      </Routes>
    </div>
  )
}

export default Search
