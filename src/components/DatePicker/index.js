import React from 'react'
import DatePicker from 'react-datepicker'
import { addDays } from 'date-fns'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './styles.module.scss'

type PickerProps = {
  label: string,
  maxDate: number,
  onChange: () => object,
  selected: boolean,
  showTimeSelect: boolean,
};

const Picker = ({
  label,
  maxDate,
  onChange,
  selected,
  showTimeSelect
}: PickerProps) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <DatePicker
        className={styles.picker}
        maxDate={addDays(new Date(), maxDate - 1)}
        onChange={onChange}
        selected={selected}
        showTimeSelect={showTimeSelect}
      />
    </div>
  )
}

export default Picker
