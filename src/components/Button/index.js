import React from 'react'
import styles from './styles.module.scss'

type ButtonProps = {
  onClick: () => object,
  text: string,
  type: string
};

const Button = ({ text, onClick, type = 'button' }: ButtonProps) => (
  <button className={styles.button} onClick={onClick} type={type}>{text}</button>
)

export default Button
