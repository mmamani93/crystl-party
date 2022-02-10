import React from 'react'
import styles from './styles.module.scss'

type SelectProps = {
  label: string,
  name: string,
  register: () => void,
  required: boolean,
  options: string[]
};

const Select = ({ name, register, required = false, label, options = [] }: SelectProps) => (
  <div className={styles.container}>
    <label className={styles.label}>{label || name}</label>
    <select {...register(name, { required })} className={styles.select}>
      {options.map(opt => (
        <option value={opt} key={opt}>{opt}</option>
      ))}
    </select>
  </div>
)

export default Select
