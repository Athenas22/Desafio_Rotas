import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ to, className, texto, onClick }) => {
  return (
    <Link to={to} className={className} onClick={onClick}>
      {texto}
    </Link>
  )
}

export default Button
