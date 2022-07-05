import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useSetRecoilState } from 'recoil'

import { searchKeyAtom, searchKeyListAtom } from 'store/atoms'
import { SearchIcon, TimeIcon } from 'assets/svgs'

import styles from './searchBar.module.scss'

const SearchBar = () => {
  const [valueInput, setValueInput] = useState('')
  const [showInput, setShowInput] = useState(false)
  const setSearchKey = useSetRecoilState(searchKeyAtom)
  const [searchKeyList, setSearchKeyList] = useRecoilState(searchKeyListAtom)

  const inputRef = useRef<HTMLDivElement | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handelOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (!inputRef.current || inputRef.current.contains(event.target as Node)) return
      setShowInput(false)
    }

    document.addEventListener('mousedown', handelOutsideClick)
    document.addEventListener('touchstart', handelOutsideClick)

    return () => {
      document.addEventListener('mousedown', handelOutsideClick)
      document.addEventListener('touchstart', handelOutsideClick)
    }
  }, [])

  const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.currentTarget.value)
    setShowInput(true)
  }

  const handleInputValueSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearchKey(valueInput)
    setSearchKeyList((prevList) => {
      if (prevList?.indexOf(valueInput) === -1) {
        return [valueInput, ...prevList]
      }
      return prevList
    })
    setShowInput(false)
    navigate('전체')
  }

  const handleInputClick = () => {
    setShowInput(true)
  }

  const handleSearchedKeyClick = (searchedKeys: string) => {
    setSearchKey(searchedKeys)
    setValueInput(searchedKeys)
    setShowInput(false)
    navigate('전체')
  }

  const handleDeleteSearchedKeyClick = (i: number) => {
    setSearchKeyList((prevList) => {
      const copyList = [...prevList]
      copyList.splice(i, 1)
      return copyList
    })
  }

  return (
    <form className={styles.inputForm} onSubmit={handleInputValueSubmit}>
      <SearchIcon className={styles.searchIcon} />
      <input
        type='search'
        placeholder='키워드를 입력해주세요'
        value={valueInput}
        onChange={handleInputValueChange}
        onClick={handleInputClick}
      />
      <div className={showInput ? styles.showInput : styles.unShowInput} ref={inputRef}>
        <ul className={styles.currentKeyList}>
          {searchKeyList?.map((searchedKeys, i) => {
            const searchedKey = `searchedKey-${i}`
            if (searchedKeys.includes(valueInput)) {
              return (
                <li key={searchedKey}>
                  <button
                    className={styles.searchedKeyBtn}
                    type='button'
                    onClick={() => handleSearchedKeyClick(searchedKeys)}
                  >
                    <TimeIcon className={styles.timeIcon} />
                    <span>{searchedKeys}</span>
                    <button className={styles.deleteBtn} type='button' onClick={() => handleDeleteSearchedKeyClick(i)}>
                      삭제
                    </button>
                  </button>
                </li>
              )
            }
            return null
          })}
        </ul>
      </div>
    </form>
  )
}

export default SearchBar

// searchBar 클릭하면 placeholder 사라지기
// 이미 있는 검색어면 최신 순으로 정렬
// 삭제 기능
// 누르면 바로 onSubmit 하기
// keydown 으로 이동
// input 누르면 리스트 열리기
// 바깥 클릭한 경우 리스트 사라지기
// 검색 저장 기능 키워드 수 제한
