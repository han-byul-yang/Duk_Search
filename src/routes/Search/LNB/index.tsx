import { NavLink } from 'react-router-dom'
import cx from 'classnames'

import styles from './lnb.module.scss'

const categoryList = ['전체', '뉴스', '연예', '음악', '음식', '게임', '뷰티', '스포츠', '키즈']

const LNB = () => {
  return (
    <nav className={styles.lnb}>
      <div className={styles.lnbHeader}>Categories</div>
      <ul>
        {categoryList.map((category) => (
          <li key={category}>
            <NavLink
              to={category}
              className={({ isActive }) => cx(styles.nonActivatedLink, { [styles.activatedLink]: isActive })}
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
