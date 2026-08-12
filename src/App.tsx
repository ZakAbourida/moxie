import Nav from './components/Nav'
import Hero from './components/Hero'
import FeatureHighlights from './components/FeatureHighlights'
import Manifesto from './components/Manifesto'
import FeatureRows from './components/FeatureRows'
import CaseStudies from './components/CaseStudies'
import Roles from './components/Roles'
import WhyMoxie from './components/WhyMoxie'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import Background from './components/Background'
import StatsBand from './components/StatsBand'
import AcwrDemo from './components/AcwrDemo'

export default function App() {
  return (
    <div id="top" className="min-h-screen text-ink">
      <Background />
      <Nav />
      <main>
        <Hero />
        <FeatureHighlights />
        <StatsBand />
        <Manifesto />
        <FeatureRows />
        <AcwrDemo />
        <CaseStudies />
        <Roles />
        <WhyMoxie />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
