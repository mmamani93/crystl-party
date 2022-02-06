import React from 'react'
import { useNavigate } from 'react-router-dom'
import Routes from '@constants/routes'

const Welcome = () => {
  const navigate = useNavigate()

  return (
    <div>
      <span>Welcome to Crystl party planner, we will help you to plan the best beer parties!</span>
      <span>
        Please fill in some information we are going to ask you, this will help us to get the correct amount of beers
        you will need and generate an invitation for you
      </span>
      <button onClick={() => navigate(Routes.PARTY_FORM)} type='button'>Go to Party Form</button>
    </div>
  )
}

export default Welcome
