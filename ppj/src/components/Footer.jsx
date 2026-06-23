import { AtSign, Camera, Headphones, MessageCircle } from 'lucide-react'
import styles from './Footer.module.css'

const socialLinks = [
  {
    label: 'Instagram',
    href: '#',
    icon: Camera,
  },
  {
    label: 'Canal de WhatsApp',
    href: '#',
    icon: MessageCircle,
  },
  {
    label: 'Threads',
    href: '#',
    icon: AtSign,
  },
  {
    label: 'Spotify',
    href: '#',
    icon: Headphones,
  },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand} aria-label="Primeros Pasos con Jesús">
          <span className={styles.cross}>✝</span>
          <div className={styles.brandText}>
            <span className={styles.title}>Primeros Pasos</span>
            <span className={styles.subtitle}>con Jesús</span>
          </div>
        </div>

        <p className={styles.copy}>
          © 2024 Primeros Pasos con Jesús. Todos los derechos reservados.
        </p>

        <div className={styles.socials} aria-label="Redes sociales">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a key={label} className={styles.socialLink} href={href} aria-label={label}>
              <Icon size={23} strokeWidth={2.4} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
