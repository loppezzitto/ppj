import { 
  BookOpen, 
  Heart, 
  BookMarked, 
  Users, 
  Sprout 
} from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './FeaturesGrid.module.css'

const features = [
  {
    id: 1,
    title: 'Devocionales',
    description: 'Reflexiones diarias para crecer en tu relación con Dios y aplicar Su Palabra a tu vida.',
    icon: BookOpen,
    color: '#a855f7',
    path: '/devocionales'
  },
  {
    id: 2,
    title: 'Aprender a orar',
    description: 'Una guía sencilla para comenzar a hablar con Dios con confianza y sinceridad.',
    icon: Heart,
    color: '#d4949d',
    path: '/aprender-orar'
  },
  {
    id: 3,
    title: 'Conociendo la Biblia',
    description: 'Descubre qué es la Biblia, cómo leerla y por dónde empezar.',
    icon: BookMarked,
    color: '#a855f7',
    path: '/biblia'
  },
  {
    id: 4,
    title: 'Creciendo en comunidad',
    description: 'La fe no se vive en soledad. Aprende la importancia de caminar junto a otros creyentes.',
    icon: Users,
    color: '#d4949d',
    path: '/recursos'
  },
  {
    id: 5,
    title: 'Tus primeros pasos de fe',
    description: 'Consejos y enseñanzas para fortalecer tu relación con Jesús día a día.',
    icon: Sprout,
    color: '#ffd699',
    path: '/sobre-mi'
  }
]

export default function FeaturesGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>¿Qué encontrarás aquí?</h2>
        <div className={styles.heartDivider}>💜</div>
      </div>

      <div className={styles.grid}>
        {features.map((feature) => {
          const IconComponent = feature.icon
          return (
            <Link key={feature.id} to={feature.path} className={styles.card}>
              <div 
                className={styles.iconContainer}
                style={{ backgroundColor: feature.color }}
              >
                <IconComponent size={40} color="white" strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
