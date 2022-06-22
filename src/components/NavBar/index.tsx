import { Link, NavLink } from 'react-router-dom'

import { ChartIcon, HamburgerIcon, HomeIcon, LogoIcon } from 'assets/svgs'

import styles from './navBar.module.scss'

const NavBar = () => {
  return (
    <nav className={styles.navigation}>
      <Link to='/'>
        <LogoIcon className={styles.logo} />
      </Link>
      <ul className={styles.navigationList}>
        <NavLink
          to='/search'
          className={({ isActive }) =>
            `${styles.navLink} + ${isActive ? styles.activatedLink : styles.nonActivatedLink}`
          }
        >
          <li>
            <HomeIcon className={styles.navIcon} />
            SEARCH
          </li>
        </NavLink>
        <NavLink
          to='/chart'
          className={({ isActive }) =>
            `${styles.navLink} + ${isActive ? styles.activatedLink : styles.nonActivatedLink}`
          }
        >
          <li>
            <ChartIcon className={styles.navIcon} />
            CHART
          </li>
        </NavLink>
      </ul>
    </nav>
  )
}

export default NavBar
