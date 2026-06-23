import Carousel from '../components/Carousel'
import FeaturesGrid from '../components/FeaturesGrid'
import WhoWeAre from '../components/WhoWeAre'

export default function Home() {
  return (
    <div>
      <Carousel />
      <FeaturesGrid />
      <WhoWeAre />
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          color: '#5b21b6',
          marginBottom: '1rem'
        }}>
          Tu Camino de Fe Comienza Aquí
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#8B7355',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.8'
        }}>
          Cada día es una oportunidad para crecer espiritualmente. En este espacio encontrarás 
          herramientas, devocionales y enseñanzas que te ayudarán a profundizar tu relación con Dios.
        </p>
      </section>
    </div>
  )
}
