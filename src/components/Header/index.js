import React from 'react'
import styles from './styles.module.scss'
import CrystlLogo from '@assets/crystlBannerLogo.png'

const Header = () => (
  <div className={styles.container}>
    <img className={styles.logo} src={CrystlLogo} alt='Crystl logo'/>
    <h1 className={styles.appName}>Crystl Party Planner</h1>
  </div>
)

export default Header
