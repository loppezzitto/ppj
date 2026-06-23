import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Devocionales from './pages/Devocionales'
import AprenderOrar from './pages/AprenderOrar'
import Biblia from './pages/Biblia'
import Recursos from './pages/Recursos'
import SobreMi from './pages/SobreMi'
import './App.css'

function App() {
  return (
    <div className="appShell">
      <Navbar />
      <main className="mainContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/devocionales" element={<Devocionales />} />
          <Route path="/aprender-orar" element={<AprenderOrar />} />
          <Route path="/biblia" element={<Biblia />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
