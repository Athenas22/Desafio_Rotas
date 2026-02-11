import React from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.scss'
import Button from '../button/Button'
import Coracao from '../../assets/coracao.png'
import Hamburguer from '../hamburger/MenuHamburguer'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.mainHeader}>
        <img src={Coracao} alt="Imagem de um coração" />
        <Link to='/' className={styles.links}>
          <h1>Médicos & Dentistas</h1>
        </Link>
      </div>

      <nav>
        <Link to='/' className={styles.linkHome}>Home</Link>
        <Button to='/seja-voluntario' className={styles.linkVoluntario} texto='Seja Voluntário' />
      </nav>

      <Hamburguer />
    </header>
  )
}

export default Header
