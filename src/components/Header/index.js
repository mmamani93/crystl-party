import React from 'react'
import { useNavigate } from 'react-router-dom'
import Routes from '@constants/routes'
import CrystlLogo from '@assets/crystlBannerLogo.png'
import styles from './styles.module.scss'

const Header = () => {
  const navigate = useNavigate()

  const navigateToHome = () => navigate(Routes.WELCOME)

  return (
    <div className={styles.container}>
      <button type='button' onClick={navigateToHome} className={styles.button}>
        <img className={styles.logo} src={CrystlLogo} alt='Crystl logo'/>
      </button>
      <h1 className={styles.appName}>Crystl Party Planner</h1>
    </div>
  )
}

export default Header
