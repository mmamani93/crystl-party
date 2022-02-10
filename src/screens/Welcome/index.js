import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import Routes from '@constants/routes'
import Button from '@components/Button'
import styles from './styles.module.scss'
import { OPACITY_SHOW } from '@constants/animation'

const Welcome = () => {
  const navigate = useNavigate()
  const animatedStyle = useSpring(OPACITY_SHOW)

  const navigateToPartyForm = () => navigate(Routes.PARTY_FORM)

  return (
    <animated.div className={styles.container} style={animatedStyle}>
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
      <Button onClick={navigateToPartyForm} text='Lets get the party planned!' style={styles.button} />
    </animated.div>
  )
}

export default Welcome
