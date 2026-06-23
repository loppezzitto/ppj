import styles from './Page.module.css'

export default function AprenderOrar() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Conversación con Dios</p>
          <h1 className={styles.title}>Aprender a Orar</h1>
          <p className={styles.intro}>
            Orar no es repetir palabras perfectas. Es hablar con Dios desde la verdad de tu corazón y aprender a escucharlo.
          </p>
        </div>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Un modelo práctico</h2>
        <div className={styles.grid}>
          <article className={styles.card}>
            <h3>Adora</h3>
            <p>Empieza recordando quién es Dios: bueno, fiel, cercano y digno de confianza.</p>
          </article>
          <article className={styles.card}>
            <h3>Agradece</h3>
            <p>Nombra con sencillez las formas en que has visto Su cuidado, incluso en detalles pequeños.</p>
          </article>
          <article className={styles.card}>
            <h3>Entrega</h3>
            <p>Cuéntale tus preocupaciones y pide dirección para obedecer con fe.</p>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Oración breve</h2>
        <blockquote className={styles.quote}>
          Señor Jesús, enséñame a buscarte con sinceridad. Ayúdame a confiar en tu amor y a caminar contigo hoy.
        </blockquote>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaBox}>
          <h2>Empieza con cinco minutos</h2>
          <p>La constancia nace de pasos pequeños. Un momento honesto con Dios vale más que una oración larga sin atención.</p>
        </div>
      </section>
    </div>
  )
}
