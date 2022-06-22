import { ChangeEvent, FormEvent, useState } from 'react'

import { SearchIcon } from 'assets/svgs'

import styles from './searchBar.module.scss'

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('')

  const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value)
  }

  const handleInputValueSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form className={styles.inputForm} onSubmit={handleInputValueSubmit}>
      <SearchIcon className={styles.searchIcon} />
      <input type='search' placeholder='키워드를 입력해주세요' value={searchValue} onChange={handleInputValueChange} />
    </form>
  )
}

export default SearchBar
