import Header from './components/Header'
import Hero from './components/Hero'
import { ValueStrip, Problem, Solutions, Workflow, BusinessResult, Pricing, WhyUs, BeforeAfter, Blog } from './components/Sections'
import { AuditCTA, FAQ, FinalCTA, Footer } from './components/MoreSections'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ValueStrip />
      <Problem />
      <Solutions />
      <Workflow />
      <BusinessResult />
      <Pricing />
      <WhyUs />
      <BeforeAfter />
      <Blog />
      <AuditCTA />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}
