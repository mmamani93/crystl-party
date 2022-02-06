import React from 'react'

const Input = ({
  name, register, required = false, label, defaultValue = ''
}) => {
  const displayLabel = label || name.charAt(0).toUpperCase() + name.slice(1)

  return (
    <>
      <label>{displayLabel}</label>
      <input defaultValue={defaultValue} {...register(name, { required })} />
    </>
  )
}

export default Input
