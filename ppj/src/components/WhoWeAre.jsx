import { useState } from 'react'
import { Heart } from 'lucide-react'
import styles from './WhoWeAre.module.css'

export default function WhoWeAre() {
  const [liked, setLiked] = useState(false)

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.titleContainer}>
            <Heart size={28} color="#a855f7" fill="#a855f7" />
            <h2 className={styles.title}>Nuestro deseo</h2>
          </div>
          
          <p className={styles.text}>
            Que este sea un lugar donde puedas acercarte más a Jesús, conocer Su amor y recordar que no importa cuántas veces caigas, Su gracia siempre está disponible para levantarte y transformar tu corazón.
          </p>

          <p className={styles.tagline}>
            No estés solo, Jesús camina contigo. 💜
          </p>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.imagePlaceholder}>
            <div className={styles.imageContent}>
              <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                {/* Fondo degradado */}
                <defs>
                  <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#c4a8f0', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: '#f4d4b8', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#d4a5a5', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <rect width="300" height="300" fill="url(#skyGradient)" />
                
                {/* Camino */}
                <polygon points="100,200 150,280 200,200 180,200 180,150 120,150 120,200" fill="#8B7355" opacity="0.6" />
                
                {/* Cruz */}
                <rect x="135" y="80" width="30" height="80" fill="#8B7355" />
                <rect x="110" y="105" width="80" height="20" fill="#8B7355" />
                
                {/* Flores/plantas */}
                <circle cx="70" cy="180" r="15" fill="#a855f7" opacity="0.7" />
                <circle cx="240" cy="170" r="18" fill="#d4949d" opacity="0.7" />
              </svg>
            </div>
          </div>

          <button
            className={`${styles.heartButton} ${liked ? styles.liked : ''}`}
            onClick={() => setLiked((current) => !current)}
            aria-label={liked ? 'Quitar me gusta' : 'Me gusta'}
            aria-pressed={liked}
          >
            {liked ? '♥' : '♡'}
          </button>
        </div>
      </div>
    </section>
  )
}
