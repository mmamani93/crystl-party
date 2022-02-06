import React from 'react'
import DatePicker from 'react-datepicker'
import { addDays } from 'date-fns'
import 'react-datepicker/dist/react-datepicker.css'

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
    <>
      <label>{label}</label>
      <DatePicker selected={selected} onChange={onChange} showTimeSelect={showTimeSelect} maxDate={addDays(new Date(), maxDate - 1)} a={addDays(new Date(), maxDate - 1)} b={addDays(new Date(), maxDate - 1)}/>
    </>
  )
}

export default Picker
