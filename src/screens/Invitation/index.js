import React from 'react'
import { useSelector } from 'react-redux'
import styles from './styles.module.scss'

const Invitation = () => {
  const { formData } = useSelector((state) => state.partyForm.value)
  const { beers } = useSelector((state) => state.partyForm.value)
  const { temperature } = useSelector((state) => state.partyForm.value)

  return (
    <div className={styles.container}>
      <h3 className={`${styles.partyInfo} ${styles.title}`}>{formData.reason}</h3>
      <span className={styles.partyInfo}>Date:
        <span className={styles.data}> {String(formData.startDate)}</span>
      </span>
      <span className={styles.partyInfo}>Time:
        <span className={styles.data}> {String(formData.startDate)}</span>
      </span>
      <span className={styles.partyInfo}>Where:
        <span className={styles.data}> {formData.address}</span>
      </span>
      <span className={styles.partyInfo}>Total amount of beers:
        <span className={styles.data}> {beers}</span>
      </span>
      <span className={styles.partyInfo}>Temperature forecast:
        <span className={styles.data}> {temperature.toFixed(1)} °C</span>
      </span>
    </div>
  )
}

export default Invitation
