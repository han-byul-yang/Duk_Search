import { NavLink } from 'react-router-dom'

import styles from './lnb.module.scss'

const categoryList = ['전체', '뉴스', '연예', '음악', '음식', '게임', '뷰티', '스포츠', '키즈']

const LNB = () => {
  return (
    <nav className={styles.lnb}>
      <ul>
        {categoryList.map((category) => (
          <NavLink
            key={category}
            to={category}
            className={({ isActive }) => (isActive ? styles.activatedLink : styles.nonActivatedLink)}
          >
            <li>{category}</li>
          </NavLink>
        ))}
      </ul>
    </nav>
  )
}

export default LNB
