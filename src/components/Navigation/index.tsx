import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { HamburgerIcon, LogoIcon } from 'assets/svgs'
import GNB from './GNB'

import styles from './navigation.module.scss'

const Navigation = () => {
  const [isSmall, setIsSmall] = useState(false)
  const [showGNB, setShowGNB] = useState(false)

  const navRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setIsSmall(window.innerWidth > 768)

    const handleResize = () => {
      setIsSmall(window.innerWidth > 768)
    }

    const handelOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (!navRef.current || navRef.current.contains(event.target as Node)) return
      setShowGNB(false)
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('mousedown', handelOutsideClick)
    document.addEventListener('touchstart', handelOutsideClick)

    return () => {
      window.removeEventListener('resize', handleResize)
      document.addEventListener('mousedown', handelOutsideClick)
      document.addEventListener('touchstart', handelOutsideClick)
    }
  }, [])

  const handleNavigationClick = () => {
    setShowGNB((prevState) => !prevState)
  }

  return (
    <nav className={styles.navigation}>
      <Link to='/'>
        <LogoIcon className={styles.logo} />
      </Link>
      {isSmall ? (
        <GNB />
      ) : (
        <div className={styles.smallNavigation}>
          <HamburgerIcon className={styles.hamburgerIcon} onClick={handleNavigationClick} />
          <div className={showGNB ? styles.showGNB : styles.unShowGNB} ref={navRef}>
            <GNB />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation

// logo size
// open gnb close gnb
// search 아이콘 누르면 searchBar input key 사라지기, recoil 값도
// isSmall true false 방향 틀림
