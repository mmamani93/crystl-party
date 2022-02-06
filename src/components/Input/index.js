import React from 'react'
import FormError from '../FormError'
import { REQUIRED_FIELD_ERROR } from '@constants/formStrings'

type InputProps = {
  defaultValue: string,
  label: string,
  name: string,
  register: () => void,
  required: boolean,
  error: object
};

const Input = ({
  name, register, required = false, label, defaultValue = '', error
}: InputProps) => {
  const displayLabel = label || name.charAt(0).toUpperCase() + name.slice(1)

  return (
    <>
      <label>{displayLabel}</label>
      <input defaultValue={defaultValue} {...register(name, { required })} />
      {error && <FormError errorMessage={REQUIRED_FIELD_ERROR} />}
    </>
  )
}

export default Input
