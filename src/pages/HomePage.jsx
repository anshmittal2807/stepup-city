import Navbar from '../components/shared/Navbar.jsx'
import Hero from '../components/home/Hero.jsx'
import AgencySections from '../components/home/AgencySections.jsx'
import Footer from '../components/shared/Footer.jsx'

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AgencySections />
      </main>
      <Footer />
    </>
  )
}

export default HomePage
