import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState, useRef } from 'react'
import {
  CheckCircle,
  MapPin,
  Building2,
  Wrench,
  ClipboardCheck,
  Package,
  Mail,
  Phone,
  ArrowRight,
} from 'lucide-react'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  const services = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Pre-Approval Success',
      items: [
        'Site Survey and Feasibility Analysis',
        'Risk Mitigation Planning',
        'Lease Negotiation of Technical Exhibits',
        'Permit Expediting and Acceleration',
        'Vendor and GC Sourcing',
        'Capital Planning and Budgeting',
      ],
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: 'Project Management',
      items: [
        'Schedule and Milestone Tracking',
        'Project Monitoring and Reporting',
        'Tender Management and Awards',
        'Cost Reduction Analysis',
        'Change Management',
        'Strategic Process Implementation',
      ],
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Post Opening Support',
      items: [
        'Maintenance Vendor Selection',
        'O&M Management',
        'Defects and Snaglist Closeout',
        'Warranty Period Monitoring',
        'Green Store Exits',
        'Fixture Recovery and Recycling',
      ],
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Turnkey Solution',
      items: [
        'End-to-End Project Delivery',
        'Technical Store Design',
        'Construction Fit Out Execution',
        'Full Project Ownership',
        'Seamless Integration',
        'Comprehensive Support',
      ],
    },
  ]

  const regions = [
    { name: 'United Kingdom', cities: ['London', 'Leeds', 'Manchester'] },
    {
      name: 'France',
      cities: ['Paris', 'Marseille', 'Lyon', 'Strasbourg', 'Lille'],
    },
    { name: 'Spain', cities: ['Madrid', 'Barcelona', 'Valencia', 'Sevilla'] },
    { name: 'Italy', cities: ['Milan', 'Rome', 'Verona', 'Bologna'] },
    {
      name: 'DACH',
      cities: ['Berlin', 'Hamburg', 'Frankfurt', 'Zurich', 'Vienna'],
    },
    { name: 'USA', cities: ['Miami', 'New York', 'Los Angeles'] },
  ]

  const clients = [
    { name: 'Big Mamma', logo: '/logos/big_mamma.svg' },
    { name: 'Skims', logo: '/logos/skims.svg' },
    { name: 'Alo Yoga', logo: '/logos/alo.svg' },
    { name: 'Foot Locker', logo: '/logos/foot-locker.svg' },
    { name: 'Reformation', logo: '/logos/reformation.svg' },
    { name: 'Nike', logo: '/logos/nike.svg' },
    { name: 'Saucony', logo: '/logos/saucony.svg' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <img
            src="/storecraft-logo-black.svg"
            alt="Storecraft"
            className="h-32 md:h-40 mx-auto mb-6 animate-fade-in"
          />
          <p className="text-xl md:text-4xl font-semibold text-muted-foreground mb-8 max-w-4xl mx-auto mt-2">
            Comprehensive project management consultancy specializing in retail
            and hospitality sectors
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-border rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-muted-foreground rounded-full" />
          </div>
        </div>
      </section>

      {/* Infinite Sliding Logo Banner */}
      <section className="relative bg-primary pt-6 pb-8 overflow-hidden">
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-wider text-primary-foreground/60 font-semibold">
            Trusted by Leading Global Brands
          </p>
        </div>

        <div className="logo-slider">
          <div className="logo-track">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div key={`logo-1-${index}`} className="logo-slide">
                <img
                  src={client.logo}
                  alt={client.name}
                  className={`${client.name === 'Alo Yoga' ? 'h-9' : 'h-6'} mx-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500`}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div key={`logo-2-${index}`} className="logo-slide">
                <img
                  src={client.logo}
                  alt={client.name}
                  className={`${client.name === 'Alo Yoga' ? 'h-9' : 'h-6'} mx-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500`}
                />
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div key={`logo-3-${index}`} className="logo-slide">
                <img
                  src={client.logo}
                  alt={client.name}
                  className={`${client.name === 'Alo Yoga' ? 'h-9' : 'h-6'} mx-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        data-animate
        className={`py-24 px-6 transition-all duration-1000 ${
          visibleSections.has('services')
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground">
              A tailored solution for every client
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-8 hover:shadow-2xl transition-all duration-500 hover:border-accent hover:-translate-y-2"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary text-primary-foreground rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Coverage */}
      <section
        id="locations"
        data-animate
        className={`py-24 px-6 transition-all duration-1000 ${
          visibleSections.has('locations')
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Global Coverage
            </h2>
            <p className="text-xl text-muted-foreground">
              Offices in Paris, London, and Miami, serving clients globally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {regions.map((region, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:border-primary"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">
                    {region.name}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {region.cities.map((city, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>{city}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        data-animate
        className={`py-24 px-6 transition-all duration-1000 ${
          visibleSections.has('about')
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                About
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  Douglas Deptula
                </h3>
                <p className="text-xl text-muted-foreground mb-1">Director</p>
                <p className="flex items-center gap-2 text-accent font-medium">
                  <MapPin className="w-4 h-4" />
                  Paris, France
                </p>
              </div>

              <div className="h-px bg-border" />

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Douglas is originally from the United States and has{' '}
                  <span className="text-primary font-semibold">
                    twenty years of varied experience
                  </span>{' '}
                  in the retail construction, project management and real estate
                  sectors. He has partnered with market leading international
                  retailers in their expansion across Europe and North America
                  and prides himself on making the experience extraordinary.
                </p>
                <p>
                  Douglas is a hands-on team leader that is passionate about
                  understanding each client's specific program requirements and
                  developing custom solutions to help them succeed. He believes
                  in creating true partnerships with all project stakeholders to
                  leverage all skillsets and focus on accomplishing one common
                  goal.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                <div className="bg-background/50 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Key Roles</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Nike, Head of Project Management (Global)</li>
                    <li>
                      • Foot Locker, Director of Store Development (Global)
                    </li>
                    <li>
                      • Bonobos, Director of Store Development (North America)
                    </li>
                  </ul>
                </div>
                <div className="bg-background/50 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">
                    Key Partners
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'NBA',
                      'Apple',
                      'Fred Perry',
                      'Skin Laundry',
                      'Lee Jeans',
                      'Nike',
                      'Foot Locker',
                      'Alo Yoga',
                    ].map((partner) => (
                      <span
                        key={partner}
                        className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm"
                      >
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        data-animate
        className={`py-24 px-6 transition-all duration-1000 ${
          visibleSections.has('contact')
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to start your next project? Contact our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Paris Office */}
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:border-primary">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">
                  Paris Office
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <p className="text-foreground font-medium">Paris, France</p>
                    <p className="text-muted-foreground text-sm">
                      Headquarters
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <a
                      href="mailto:contact@storecraft.eu"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      contact@storecraft.eu
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* London Office */}
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:border-primary">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">
                  London Office
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <p className="text-foreground font-medium">London, UK</p>
                    <p className="text-muted-foreground text-sm">
                      Regional Office
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <a
                      href="mailto:uk@storecraft.eu"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      uk@storecraft.eu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href="mailto:contact@storecraft.eu"
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg font-semibold"
            >
              <Mail className="w-6 h-6" />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <img
            src="/storecraft-logo-black.svg"
            alt="Storecraft"
            className="h-12 mx-auto mb-6 invert"
          />
          <p className="text-primary-foreground/80 mb-4">
            Global Project Management Excellence
          </p>
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Storecraft. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
