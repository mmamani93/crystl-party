import React from 'react'
import { REQUIRED_FIELD_ERROR } from '@constants/formErrors'
import FormError from '../FormError'
import styles from './styles.module.scss'

type InputProps = {
  defaultValue: string,
  error: object,
  label: string,
  name: string,
  register: () => void,
  required: boolean,
  type: string
};

const Input = ({
  name, register, required = false, label, defaultValue = '', error, type = 'text'
}: InputProps) => (
    <div className={styles.container}>
      <label className={styles.label}>{label || name}</label>
      <input
        defaultValue={defaultValue}
        {...register(name, { required })}
        className={styles.input}
        placeholder={label || name}
        type={type}
      />
      {error && <FormError errorMessage={REQUIRED_FIELD_ERROR} />}
    </div>
)

export default Input
