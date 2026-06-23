import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  const menuItems = [
    { path: '/', label: 'Inicio' },
    { path: '/devocionales', label: 'Devocionales' },
    { path: '/aprender-orar', label: 'Aprender a orar' },
    { path: '/biblia', label: 'Conociendo la Biblia' },
    { path: '/recursos', label: 'Recursos' },
    { path: '/sobre-mi', label: 'Sobre mí' }
  ]

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <NavLink
          to="/"
          className={styles.logo}
        >
          <span className={styles.cross}>✝️</span>
          <div className={styles.logoText}>
            <div className={styles.title}>Primeros Pasos</div>
            <div className={styles.subtitle}>con Jesús</div>
          </div>
        </NavLink>
        
        <ul className={styles.menu}>
          {menuItems.map(item => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `${styles.menuLink} ${isActive ? styles.active : ''}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
