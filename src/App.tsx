import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import TopButton from './components/layout/TopButton'
import HeroSection from './components/sections/HeroSection'
import FirefighterSection from './components/sections/FirefighterSection'
import OverviewSection from './components/sections/OverviewSection'
import StatsSection from './components/sections/StatsSection'
import DevicesSection from './components/sections/DevicesSection'
import DeskResearchSection from './components/sections/DeskResearchSection'
import PainPointsSection from './components/sections/PainPointsSection'
import SolutionsSection from './components/sections/SolutionsSection'
import PersonaSection from './components/sections/PersonaSection'
import DifferentiationSection from './components/sections/DifferentiationSection'
import BrandingSection from './components/sections/BrandingSection'
import DesignSystemSection from './components/sections/DesignSystemSection'
import InfoArchSection from './components/sections/InfoArchSection'
import OnboardingSection from './components/sections/OnboardingSection'
import ServiceUISection from './components/sections/ServiceUISection'
import DeviceDetailsSection from './components/sections/DeviceDetailsSection'
import SmartAdminSection from './components/sections/SmartAdminSection'
import CTASection from './components/sections/CTASection'
import GallerySection from './components/sections/GallerySection'

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-fica-black">
      <Header />
      <main className="w-full">
        <HeroSection />
        <FirefighterSection />
        <OverviewSection />
        <StatsSection />
        <DevicesSection />
        <DeskResearchSection />
        <PainPointsSection />
        <SolutionsSection />
        <PersonaSection />
        <DifferentiationSection />
        <BrandingSection />
        <DesignSystemSection />
        <InfoArchSection />
        <OnboardingSection />
        <ServiceUISection />
        <DeviceDetailsSection />
        <SmartAdminSection />
        <CTASection />
        <GallerySection />
      </main>
      <Footer />
      <TopButton />
    </div>
  )
}

export default App
