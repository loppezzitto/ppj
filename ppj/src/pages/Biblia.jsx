import styles from './Page.module.css'

export default function Biblia() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Palabra viva</p>
          <h1 className={styles.title}>Conociendo la Biblia</h1>
          <p className={styles.intro}>
            La Biblia cuenta la historia de Dios acercándose a la humanidad y revelando su amor por medio de Jesús.
          </p>
        </div>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Por dónde empezar</h2>
        <div className={styles.grid}>
          <article className={styles.card}>
            <h3>Evangelio de Juan</h3>
            <p>Un buen inicio para conocer quién es Jesús, cómo ama y qué significa creer en Él.</p>
          </article>
          <article className={styles.card}>
            <h3>Salmos</h3>
            <p>Oraciones, cantos y palabras honestas para aprender a expresar alegría, temor, dolor y esperanza.</p>
          </article>
          <article className={styles.card}>
            <h3>Proverbios</h3>
            <p>Consejos prácticos para vivir con sabiduría en relaciones, decisiones y carácter.</p>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Cómo leer</h2>
        <ul className={styles.list}>
          <li>Pregunta qué revela el pasaje sobre Dios.</li>
          <li>Observa qué enseña sobre el corazón humano.</li>
          <li>Piensa qué paso concreto puedes obedecer hoy.</li>
        </ul>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaBox}>
          <h2>Lee con paciencia</h2>
          <p>No necesitas entender todo de inmediato. Vuelve al texto, ora y permite que Dios forme tu vida con el tiempo.</p>
        </div>
      </section>
    </div>
  )
}
