import React from 'react'
import styles from './styles.module.scss'

type ButtonProps = {
  style: object,
  onClick: () => object,
  text: string,
  type: string
};

const Button = ({ text, onClick, type = 'button', style }: ButtonProps) => (
  <button className={`${styles.button} ${style}`} onClick={onClick} type={type}>{text}</button>
)

export default Button
