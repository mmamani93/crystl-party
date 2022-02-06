import React from 'react'

type InputProps = {
  defaultValue: string,
  label: string,
  name: string,
  register: () => void,
  required: boolean,
};

const Input = ({
  name, register, required = false, label, defaultValue = ''
}: InputProps) => {
  const displayLabel = label || name.charAt(0).toUpperCase() + name.slice(1)

  return (
    <>
      <label>{displayLabel}</label>
      <input defaultValue={defaultValue} {...register(name, { required })} />
    </>
  )
}

export default Input
