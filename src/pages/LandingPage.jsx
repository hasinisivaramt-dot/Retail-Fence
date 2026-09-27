import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import ForCustomers from '../components/ForCustomers'
import ForRetailers from '../components/ForRetailers'
import Impact from '../components/Impact'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Features />
        <HowItWorks />
        <ForCustomers />
        <ForRetailers />
        <Impact />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
