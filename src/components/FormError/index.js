import React from 'react'

type FormErrorProps = {
  errorMessage: string
};

const FormError = ({ errorMessage }: FormErrorProps) => {
  return <span>{errorMessage}</span>
}

export default FormError
