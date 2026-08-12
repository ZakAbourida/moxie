import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import CoreLoop from './components/CoreLoop'
import FeatureHighlights from './components/FeatureHighlights'
import FeatureRows from './components/FeatureRows'
import DecisionMaking from './components/DecisionMaking'
import AcwrDemo from './components/AcwrDemo'
import CaseStudies from './components/CaseStudies'
import Roles from './components/Roles'
import Manifesto from './components/Manifesto'
import WhyMoxie from './components/WhyMoxie'
import ScienceTrust from './components/ScienceTrust'
import GettingStarted from './components/GettingStarted'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import Background from './components/Background'

export default function App() {
  return (
    <div id="top" className="min-h-screen text-ink">
      <Background />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <CoreLoop />
        <FeatureHighlights />
        <FeatureRows />
        <DecisionMaking />
        <AcwrDemo />
        <CaseStudies />
        <Roles />
        <Manifesto />
        <WhyMoxie />
        <ScienceTrust />
        <GettingStarted />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
