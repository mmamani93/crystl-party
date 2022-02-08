import React from 'react'
import styles from './styles.module.scss'

type FormErrorProps = {
  errorMessage: string
};

const FormError = ({ errorMessage }: FormErrorProps) => {
  return <span className={styles.error}>{errorMessage}</span>
}

export default FormError
