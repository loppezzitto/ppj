import styles from './Page.module.css'

export default function SobreMi() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>El propósito</p>
          <h1 className={styles.title}>Sobre mí</h1>
          <p className={styles.intro}>
            Este espacio nace para acompañar a quienes desean conocer a Jesús y necesitan una guía clara, cercana y sencilla.
          </p>
        </div>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Por qué existe este sitio</h2>
        <div className={styles.grid}>
          <article className={styles.card}>
            <h3>Acompañar</h3>
            <p>Porque los primeros pasos de fe suelen venir con preguntas, dudas y necesidad de dirección.</p>
          </article>
          <article className={styles.card}>
            <h3>Enseñar con sencillez</h3>
            <p>Para presentar verdades bíblicas de forma clara, sin perder profundidad ni cuidado pastoral.</p>
          </article>
          <article className={styles.card}>
            <h3>Recordar la gracia</h3>
            <p>Para volver una y otra vez al amor de Jesús, que levanta, transforma y sostiene.</p>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Nuestra mirada</h2>
        <blockquote className={styles.quote}>
          Nadie tiene que caminar solo. La fe crece mejor cuando se aprende con paciencia, verdad y comunidad.
        </blockquote>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaBox}>
          <h2>Bienvenido a este camino</h2>
          <p>Que cada recurso te acerque más a Jesús y te ayude a descubrir la esperanza que hay en Él.</p>
        </div>
      </section>
    </div>
  )
}
