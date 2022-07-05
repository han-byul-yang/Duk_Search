import { NavLink } from 'react-router-dom'

import styles from './lnb.module.scss'

const categoryList = ['all', 'news', '연예', '음악', '음식', '게임', '뷰티', '스포츠', '키즈']

const LNB = () => {
  return (
    <nav className={styles.lnb}>
      <ul>
        {categoryList.map((category) => (
          <li key={category}>
            <NavLink
              to={category}
              className={({ isActive }) => (isActive ? styles.activatedLink : styles.nonActivatedLink)}
            >
              {category}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default LNB

// display fix
// activate lnb
