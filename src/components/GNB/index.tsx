import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { ChartIcon, HamburgerIcon, HomeIcon, LogoIcon } from 'assets/svgs'

import styles from './gnb.module.scss'

const NavBar = () => {
  const [isSmall, setIsSmall] = useState(false)

  useEffect(() => {
    setIsSmall(window.innerWidth > 768)

    const handleResize = () => {
      setIsSmall(window.innerWidth > 768)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <nav className={styles.gnb}>
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

// logo size
// open gnb close gnb
