import { ChangeEvent, FormEvent, useState } from 'react'
import { useSetRecoilState } from 'recoil'

import { searchKeyAtom } from 'store/atoms'
import { SearchIcon } from 'assets/svgs'

import styles from './searchBar.module.scss'

const SearchBar = () => {
  const [valueInput, setValueInput] = useState('')
  const setSearchKey = useSetRecoilState(searchKeyAtom)

  const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.currentTarget.value)
  }

  const handleInputValueSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearchKey(valueInput)
  }

  return (
    <form className={styles.inputForm} onSubmit={handleInputValueSubmit}>
      <SearchIcon className={styles.searchIcon} />
      <input type='search' placeholder='키워드를 입력해주세요' value={valueInput} onChange={handleInputValueChange} />
    </form>
  )
}

export default SearchBar
