import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import styles from './Carousel.module.css'

const carouselData = [
  {
    id: 1,
    title: 'Primeros Pasos',
    subtitle: 'con Jesús',
    description: 'Un camino para conocer el amor, la gracia y la verdad de Dios.',
    buttonText: 'Comienza tu camino con Jesús',
    path: '/devocionales',
    quote: '"Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar."',
    reference: '— Mateo 11:28 (RVR1960)',
    image: 'linear-gradient(135deg, rgba(255, 228, 196, 0.8), rgba(230, 190, 255, 0.8)), url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1200 600%27%3E%3Crect fill=%27%23F7F3ED%27 width=%271200%27 height=%27600%27/%3E%3C/svg%3E")'
  },
  {
    id: 2,
    title: 'Conoce la',
    subtitle: 'Biblia',
    description: 'Descubre los libros sagrados y su mensaje transformador para tu vida.',
    buttonText: 'Explorar la Biblia',
    path: '/biblia',
    quote: '"Porque la palabra de Dios es viva y eficaz..."',
    reference: '— Hebreos 4:12 (RVR1960)',
    image: 'linear-gradient(135deg, rgba(200, 220, 255, 0.8), rgba(230, 190, 255, 0.8)), url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1200 600%27%3E%3Crect fill=%27%23e8ddf5%27 width=%271200%27 height=%27600%27/%3E%3C/svg%3E")'
  },
  {
    id: 3,
    title: 'Aprende a',
    subtitle: 'Orar',
    description: 'Conecta con Dios a través de la oración sincera y del corazón.',
    buttonText: 'Iniciar tu práctica de oración',
    path: '/aprender-orar',
    quote: '"Orad sin cesar"',
    reference: '— 1 Tesalonicenses 5:17 (RVR1960)',
    image: 'linear-gradient(135deg, rgba(255, 240, 200, 0.8), rgba(230, 190, 255, 0.8)), url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1200 600%27%3E%3Crect fill=%27%23faf5ee%27 width=%271200%27 height=%27600%27/%3E%3C/svg%3E")'
  }
]

export default function Carousel() {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentSlide((prev) => (prev + 1) % carouselData.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir > 0 ? -1000 : 1000,
      opacity: 0
    })
  }

  const paginate = (newDirection) => {
    setDirection(newDirection)
    setCurrentSlide((prev) => (prev + newDirection + carouselData.length) % carouselData.length)
  }

  const slide = carouselData[currentSlide]
  const isFavorite = favorites.includes(slide.id)

  return (
    <div className={styles.carousel}>
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 }
          }}
          className={styles.slide}
          style={{
            backgroundImage: slide.image,
            backgroundSize: 'cover',
            backgroundPosition: 'center right'
          }}
        >
          <div className={styles.content}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className={styles.label}>BIENVENIDO A</p>
              <h1 className={styles.title}>{slide.title}</h1>
              <h2 className={styles.subtitle}>{slide.subtitle}</h2>
              <p className={styles.description}>{slide.description}</p>
              <button className={styles.button} onClick={() => navigate(slide.path)}>
                ❤️ {slide.buttonText}
              </button>
            </motion.div>

            <motion.div
              className={styles.quote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className={styles.quoteIcon}>❝</div>
              <p className={styles.quoteText}>{slide.quote}</p>
              <p className={styles.reference}>{slide.reference}</p>
              <button
                className={`${styles.heartButton} ${isFavorite ? styles.favorite : ''}`}
                onClick={() => {
                  setFavorites((current) =>
                    current.includes(slide.id)
                      ? current.filter((id) => id !== slide.id)
                      : [...current, slide.id]
                  )
                }}
                aria-label={isFavorite ? 'Quitar de favoritos' : 'Guardar en favoritos'}
                aria-pressed={isFavorite}
              >
                {isFavorite ? '♥' : '♡'}
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className={styles.controls}>
        <button 
          className={styles.navButton} 
          onClick={() => paginate(-1)}
          aria-label="Anterior"
        >
          ‹
        </button>
        
        <div className={styles.dots}>
          {carouselData.map((_, index) => (
            <motion.button
              key={index}
              className={styles.dot}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1)
                setCurrentSlide(index)
              }}
              animate={{
                scale: index === currentSlide ? 1.2 : 1,
                backgroundColor: index === currentSlide ? '#a855f7' : '#d4a5d4'
              }}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>

        <button 
          className={styles.navButton}
          onClick={() => paginate(1)}
          aria-label="Siguiente"
        >
          ›
        </button>
      </div>
    </div>
  )
}
