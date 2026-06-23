import styles from './Page.module.css'

export default function Devocionales() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Reflexiones diarias</p>
          <h1 className={styles.title}>Devocionales</h1>
          <p className={styles.intro}>
            Un espacio para detenerte, escuchar la Palabra y empezar el día con una dirección clara para tu fe.
          </p>
        </div>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Para comenzar esta semana</h2>
        <div className={styles.grid}>
          <article className={styles.card}>
            <h3>Gracia para hoy</h3>
            <p>Recuerda que Dios no te pide perfección para acercarte a Él; te invita a caminar con confianza.</p>
          </article>
          <article className={styles.card}>
            <h3>Fe en lo pequeño</h3>
            <p>Las decisiones sencillas de cada día también forman tu carácter y fortalecen tu relación con Jesús.</p>
          </article>
          <article className={styles.card}>
            <h3>Paz en medio del ruido</h3>
            <p>Haz una pausa, ora con sinceridad y entrégale a Dios aquello que estás intentando cargar solo.</p>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Una guía sencilla</h2>
        <ul className={styles.list}>
          <li>Lee un pasaje corto de la Biblia con calma.</li>
          <li>Escribe una frase que quieras recordar durante el día.</li>
          <li>Ora pidiendo ayuda para vivir lo que aprendiste.</li>
        </ul>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaBox}>
          <h2>Hazlo parte de tu rutina</h2>
          <p>Un devocional breve y constante puede ayudarte a reconocer la voz de Dios en tu vida cotidiana.</p>
        </div>
      </section>
    </div>
  )
}
