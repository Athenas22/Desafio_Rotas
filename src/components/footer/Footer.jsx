import React from 'react'
import { Link } from 'react-router-dom'
import styles from './footer.module.scss'
import Coracao from '../../assets/coracao.png'
import Email from '../../assets/email.png'
import Telefone from '../../assets/telefone.png'
import Mapa from '../../assets/mapa.png'

function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.footerCima}>
                <section className={styles.footerMain}>
                    <div className={styles.titulo}>
                        <img src={Coracao} alt="Imagem de um coração" />
                        <Link to='/' className={styles.links}>
                            <h1>Médicos & Dentistas</h1>
                        </Link>
                    </div>

                    <p>Saúde e cuidado sem barreiras para toda comunidade.</p>
                </section>

                <section className={styles.contato}>
                    <h3>Contato</h3>
                    <div className={styles.linkRedes}>
                        <div className={styles.card}>
                            <img src={Email} alt="Icone de um email" />
                            <p>contato@medico-dentista.org</p>
                        </div>
                        <div className={styles.card}>
                            <img src={Telefone} alt="Icone de um telefone" />
                            <p>(11) 3000-0000</p>
                        </div>
                        <div className={styles.card}>
                            <img src={Mapa} alt="Icone de um mapa" />
                            <p>São Paulo, Brasil</p>
                        </div>
                    </div>
                </section>

                <section className={styles.social}>
                    <div className={styles.linkRedes}>
                        <h3>Redes Sociais </h3>
                        <a href="">Facebook</a>
                        <a href="">Instagram</a>
                        <a href="">LinkedIn</a>
                    </div>
                </section>
            </section>

            <div className={styles.legenda}>
                <p>© 2025 Médicos e Dentistas pela Comunidade. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer
