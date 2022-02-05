import { useSelector } from 'react-redux'
import styles from './styles.module.scss'

const Invitation = () => {
  const { formData } = useSelector((state) => state.partyForm.value)
  const { beers } = useSelector((state) => state.partyForm.value)
  const { temperature } = useSelector((state) => state.partyForm.value)

  return (
    <div className={styles.container}>
      <span>Party organization: {formData.company}</span>
      <span>We are meeting to celebrate {formData.reason}</span>
      <span>We will be waiting for you in {formData.address} the day {String(formData.startDate)} starting at {formData.startTime}</span>
      <span>There will be {beers} beers</span>
      <span>Temperature will be {temperature.toFixed(2)} celcius degrees</span>
    </div>
  )
}

export default Invitation
