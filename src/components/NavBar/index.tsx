import { ChartIcon, HamburgerIcon, HomeIcon, LogoIcon } from 'assets/svgs'
import styles from './navBar.module.scss'

const NavBar = () => {
  return (
    <nav className={styles.navigation}>
      <LogoIcon className={styles.logo} />
      <ul className={styles.navigationList}>
        <li>
          <HomeIcon />
          SEARCH
        </li>
        <li>
          <ChartIcon />
          CHART
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
