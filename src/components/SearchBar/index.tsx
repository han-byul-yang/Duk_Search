import { ChangeEvent, FormEvent, useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'

import { searchKeyAtom, searchKeyListAtom } from 'store/atoms'
import { SearchIcon } from 'assets/svgs'

import styles from './searchBar.module.scss'

const SearchBar = () => {
  const [valueInput, setValueInput] = useState('')
  const setSearchKey = useSetRecoilState(searchKeyAtom)
  const [searchKeyList, setSearchKeyList] = useRecoilState(searchKeyListAtom)

  const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.currentTarget.value)
  }

  const handleInputValueSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearchKey(valueInput)
    setSearchKeyList((prevList) => {
      if (prevList?.indexOf(valueInput) === -1) {
        return [...prevList, valueInput]
      }
      return prevList
    })
  }

  return (
    <form className={styles.inputForm} onSubmit={handleInputValueSubmit}>
      <SearchIcon className={styles.searchIcon} />
      <input type='search' placeholder='키워드를 입력해주세요' value={valueInput} onChange={handleInputValueChange} />
      <ul>
        {searchKeyList?.map((searchedKeys, i) => {
          const searchedKey = `searchedKey-${i}`
          return <li key={searchedKey}>{searchedKeys}</li>
        })}
      </ul>
    </form>
  )
}

export default SearchBar

// searchBar 클릭하면 placeholder 사라지기
