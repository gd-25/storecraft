import { createFileRoute } from '@tanstack/react-router'
import { LogoBanner } from '@/components/logo-banner'
import { HeroSection } from '@/components/sections/hero-section'
import { ServicesSection } from '@/components/sections/services-section'
import { LocationsSection } from '@/components/sections/locations-section'
import { TurnkeySection } from '@/components/sections/turnkey-section'
import { AboutSection } from '@/components/sections/about-section'
import { ContactSection } from '@/components/sections/contact-section'
import { FooterSection } from '@/components/sections/footer-section'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { useServiceAnimation } from '@/hooks/use-service-animation'
import { clients } from '@/data/clients'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
  const { visibleSections } = useScrollAnimation()
  useServiceAnimation()

  return (
    <div className="min-h-screen">
      <HeroSection />

      <section className="relative bg-primary pt-6 pb-8 overflow-hidden">
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-wider text-primary-foreground/60 font-semibold">
            Trusted by Leading Global Brands
          </p>
        </div>
        <LogoBanner clients={clients} />
      </section>

      <ServicesSection visibleSections={visibleSections} />
      <LocationsSection visibleSections={visibleSections} />
      <TurnkeySection visibleSections={visibleSections} />
      <AboutSection visibleSections={visibleSections} />
      <ContactSection visibleSections={visibleSections} />
      <FooterSection />
    </div>
  )
}
