import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './menuHamburguer.module.scss'
import Button from '../button/Button'

function MenuHamburguer() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  function toggleMenu() {
    setIsOpen(prev => !prev)
  }

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <div className={styles.hamburguerContainer}>
      <button
        className={`${styles.hamburguerButton} ${isOpen ? styles.active : ''}`}
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span className={styles.hamburguerLine} />
        <span className={styles.hamburguerLine} />
        <span className={styles.hamburguerLine} />
      </button>

      <div className={`${styles.dropdownMenu} ${isOpen ? styles.open : ''}`}>
        <div className={styles.dropdownContent}>
          <Link to='/' className={styles.dropdownLink} onClick={closeMenu}>
            Home
          </Link>
          <Button
            to='/seja-voluntario'
            className={styles.dropdownButton}
            texto='Seja Voluntário'
            onClick={closeMenu}
          />
        </div>
      </div>

      {isOpen && <div className={styles.overlay} onClick={closeMenu} />}
    </div>
  )
}

export default MenuHamburguer