import React from 'react'
import { useSelector } from 'react-redux'
import styles from './styles.module.scss'

const BeersAndWeather = () => {
  const { beers } = useSelector((state) => state.partyForm.value)
  const { temperature } = useSelector((state) => state.partyForm.value)
  return (
  <div className={styles.container}>
    <span className={styles.partyInfo}>Beers waiting for you:</span>
    <span className={`${styles.partyInfo} ${styles.beers}`}> {beers} </span>
    <span className={styles.partyInfo}>Temperature forecast:
      <span className={styles.data}> {temperature.toFixed(1)} °C</span>
    </span>
  </div>
  )
}

export default BeersAndWeather
