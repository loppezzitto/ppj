import styles from './Page.module.css'

export default function Recursos() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Herramientas útiles</p>
          <h1 className={styles.title}>Recursos</h1>
          <p className={styles.intro}>
            Materiales simples para acompañar tus primeros pasos: lectura bíblica, oración, comunidad y crecimiento personal.
          </p>
        </div>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Materiales sugeridos</h2>
        <div className={styles.grid}>
          <article className={styles.card}>
            <h3>Plan de lectura</h3>
            <p>Una ruta de siete días para comenzar con pasajes cortos y preguntas de reflexión.</p>
          </article>
          <article className={styles.card}>
            <h3>Diario espiritual</h3>
            <p>Un formato simple para escribir versículos, oraciones y aprendizajes importantes.</p>
          </article>
          <article className={styles.card}>
            <h3>Guía para nuevos creyentes</h3>
            <p>Conceptos básicos sobre fe, gracia, oración, Biblia y comunidad cristiana.</p>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Próximamente</h2>
        <ul className={styles.list}>
          <li>Descargables en PDF para imprimir o compartir.</li>
          <li>Recursos para grupos pequeños y discipulado inicial.</li>
          <li>Recomendaciones de lectura y música cristiana.</li>
        </ul>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaBox}>
          <h2>Recursos con propósito</h2>
          <p>La meta no es acumular información, sino ayudarte a caminar más cerca de Jesús cada día.</p>
        </div>
      </section>
    </div>
  )
}
