import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import cx from 'classnames'

import { ChartIcon, HamburgerIcon, HomeIcon, LogoIcon } from 'assets/svgs'

import styles from './navBar.module.scss'

const NavBar = () => {
  const [isSmall, setIsSmall] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(!(window.innerWidth < 768))
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <nav className={styles.navigation}>
      <Link to='/'>
        <LogoIcon className={styles.logo} />
      </Link>
      {isSmall ? (
        <ul className={styles.navigationList}>
          <NavLink
            to='/search'
            className={({ isActive }) =>
              `${styles.navLink} + ${isActive ? styles.activatedLink : styles.nonActivatedLink}`
            }
          >
            <li>
              <HomeIcon className={styles.navIcon} />
              <span>SEARCH</span>
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
              <span>CHART</span>
            </li>
          </NavLink>
        </ul>
      ) : (
        <HamburgerIcon className={styles.hamburgerIcon} />
      )}
    </nav>
  )
}

export default NavBar
