import React from 'react'
import styles from './sejaVoluntario.module.scss'
import Article from '../../components/article/Article'

function SejaVoluntario() {
  return (
    <main>
      <section className={styles.mainVoluntario}>

        <div className={styles.titulo}>
          <h1>Seja Voluntário</h1>
          <p>Junte-se a nós e faça a diferença na vida de pessoas que precisam</p>
        </div>

        <div className={styles.articles}>
          <Article h3='Impacto Direto' texto='Sua dedicação salva vidas e transforma comunidades' className={styles.article} />
          <Article h3='Crescimento Pessoal' texto='Desenvolva habilidades e cresça profissionalmente' className={styles.article} />
          <Article h3='Comunidade' texto='Faça parte de uma rede de profissionais comprometidos' className={styles.article} />
        </div>
      </section>

      <section className={styles.formularioVoluntario}>
        <div className={styles.formulario}>
          <h3>Inscrição para Voluntários</h3>

          <form action="" className={styles.form}>
            <fieldset>
              <legend>Dados Pessoais</legend>
              <div className={styles.nomeEmail}>
                <input type="text" placeholder='Seu Nome *' required className={styles.nome} />
                <input type="email" placeholder='Seu Email *' required />
              </div>
              <input type="tel" placeholder='Seu Telefone *' required />
            </fieldset>

            <fieldset className={styles.mensagem}>
              <legend>Mensagem Adicional</legend>
              <textarea placeholder='Conte-nos porque você quer ser voluntario...'></textarea>
            </fieldset>

            <fieldset className={styles.button}>
              <legend>Entraremos em contato para mais informações</legend>
              <button type="submit">Enviar Inscrição</button>
            </fieldset>
          </form>
        </div>
      </section>
    </main>
  )
}

export default SejaVoluntario
