import React from 'react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const Picker = ({ label, selected, onChange }) => (
    <>
    <label>{label}</label>
    <DatePicker selected={selected} onChange={onChange} />
  </>
)

export default Picker