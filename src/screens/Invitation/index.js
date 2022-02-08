import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Routes from '@constants/routes'
import styles from './styles.module.scss'
import BeersAndWeather from './components/BeersAndWeather'

const dateFormat = { day: '2-digit', weekday: 'long', year: 'numeric', month: '2-digit', hour: '2-digit', minute: '2-digit' }

const Invitation = () => {
  const navigate = useNavigate()

  const { formData } = useSelector((state) => state?.partyForm?.value || {})

  useEffect(() => {
    if (!formData) {
      navigate(Routes.WELCOME)
    }
  }, [])

  return formData
    ? (
    <div className={styles.container}>
      <h3 className={`${styles.partyInfo} ${styles.title}`}>You are invited to {formData.reason}!</h3>
      <span className={styles.partyInfo}>When:
        <span className={styles.data}> {formData.startDate.toLocaleDateString('en-US', dateFormat)}</span>
      </span>
      <span className={styles.partyInfo}>Where:
        <span className={styles.data}> {formData.address}</span>
      </span>
      <BeersAndWeather />
      <span className={`${styles.partyInfo} ${styles.footer}`}>Event hosted by Crystl Finance</span>
    </div>
      )
    : null
}

export default Invitation
