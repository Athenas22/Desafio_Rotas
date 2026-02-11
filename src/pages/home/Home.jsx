import React from 'react'
import styles from './home.module.scss'
import Button from '../../components/button/Button'
import Article from '../../components/article/Article'

import Estetoscopio from '../../assets/estetoscopio.png'

function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.firstMain}>
        <div className={styles.mainTitle}>
          <div className={styles.icon}>
            <img src={Estetoscopio} alt="icone de um estetoscópio" />
            <p>Saúde para todos</p>
          </div>

          <h1>Saúde e cuidado sem barreiras</h1>

          <p>
            Um projeto dedicado a oferecer atendimento médico e odontológico
            gratuito para pessoas que mais precisam na nossa comunidade.
          </p>

          <div className={styles.buttons}>
            <Button to='/seja-voluntario' className={styles.linkVoluntario} texto='Seja Voluntário' />
            <Button to='/seja-voluntario' className={styles.linkAjuda} texto='Como Ajudar' />
          </div>
        </div>
      </section>

      <section className={styles.missao}>
        <h2>Nossa Missão</h2>
        <p>Transformar vidas através do acesso universal a saúde de qualidade</p>

        <div className={styles.articles}>
          <Article h3='Acesso Equitativo' texto='Garantir que todos tenham acesso a cuidados de saúde de qualidade, independentemente de sua condição financeira.' className={styles.article} />
          <Article h3='Comunidade Forte' texto='Construir uma rede de profissionais de saúde dedicados a servir com compaixão e profissionalismo.' className={styles.article} />
          <Article h3='Bem-estar Total' texto='Oferecer atendimento integral em medicina geral e odontologia para melhorar a qualidade de vida.' className={styles.article} />
        </div>
      </section>

      <section className={styles.impacto}>
        <h2>Nosso Impacto</h2>
        <p>Transformando a saúde de nossa comunidade, um paciente de cada vez</p>

        <div className={styles.articles}>
          <Article h3='2,500+' texto='Pessoas Atendidas' className={styles.article} />
          <Article h3='150+' texto='Profissionais Voluntários' className={styles.article} />
          <Article h3='98%' texto='Satisfação dos Pacientes' className={styles.article} />
          <Article h3='5+' texto='Anos de Dedicação' className={styles.article} />
        </div>
      </section>
    </main>
  )
}

export default Home