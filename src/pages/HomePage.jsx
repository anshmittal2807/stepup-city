import Navbar from '../components/shared/Navbar.jsx'
import Hero from '../components/home/Hero.jsx'
import ServicesOverview from '../components/home/ServicesOverview.jsx'
import ServicesGrid from '../components/home/ServicesGrid.jsx'
import TrainingPrograms from '../components/home/TrainingPrograms.jsx'
import Partners from '../components/home/Partners.jsx'
import SeoSection from '../components/home/SeoSection.jsx'
import Reviews from '../components/home/Reviews.jsx'
import Footer from '../components/shared/Footer.jsx'

function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <ServicesOverview />
        <ServicesGrid />
        <TrainingPrograms />
        <Partners />
        <SeoSection />
        <Reviews />
      </main>
      <Footer />
    </>
  )
}

export default HomePage

