import React from 'react'
import styles from './styles.module.scss'
import CrystlLogo from '@assets/crystlLogo.png'

const Footer = () => (
  <div className={styles.container}>
    <img className={styles.logo} src={CrystlLogo} alt='Crystl logo'/>
  </div>
)

export default Footer
