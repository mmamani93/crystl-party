import React from 'react'
import { useNavigate } from 'react-router-dom'
import Routes from '@constants/routes'
import styles from './styles.module.scss'

const Welcome = () => {
  const navigate = useNavigate()

  const navigateToPartyForm = () => navigate(Routes.PARTY_FORM)

  return (
    <div className={styles.container}>
      <h1>Welcome to Crystl party planner, we will help you to plan the best beer parties!</h1>
      <h2>What can I do with this app?</h2>
      <span className={styles.text}>
        You will be able to calculate the ideal amount of beers for your party to be unforgivable! We will calculate this amount depending on
        the amount of participants you invite and the temperature for the given day.
      </span>
      <span className={styles.text}>
        You will also be able to generate an invitation that you can send to all your invitees!
      </span>
      <h2>What do I have to do?</h2>
      <span className={styles.text}>
        You only need to fill in some information for us and we will do the rest for you!
      </span>
      <button onClick={navigateToPartyForm} type='button' className={styles.next}>Lets get the party planned!</button>
    </div>
  )
}

export default Welcome
