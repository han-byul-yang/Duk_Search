import { NavLink } from 'react-router-dom'

import { ChartIcon, HomeIcon } from 'assets/svgs'

import styles from './gnb.module.scss'

const GNB = () => {
  return (
    <ul className={styles.navigationList}>
      <NavLink
        to='/search'
        className={({ isActive }) => `${styles.navLink} + ${isActive ? styles.activatedLink : styles.nonActivatedLink}`}
      >
        <li>
          <HomeIcon className={styles.navIcon} />
          <span>SEARCH</span>
        </li>
      </NavLink>
      <NavLink
        to='/chart'
        className={({ isActive }) => `${styles.navLink} + ${isActive ? styles.activatedLink : styles.nonActivatedLink}`}
      >
        <li>
          <ChartIcon className={styles.navIcon} />
          <span>CHART</span>
        </li>
      </NavLink>
    </ul>
  )
}

export default GNB
