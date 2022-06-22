import { HamburgerIcon, LogoIcon } from 'assets/svgs'
import styles from './navBar.module.scss'

const NavBar = () => {
  return (
    <nav className={styles.navigation}>
      <LogoIcon className={styles.logo} />
      <ul className={styles.navigationList}>
        <li>SEARCH</li>
        <li>CHART</li>
      </ul>
    </nav>
  )
}

export default NavBar
