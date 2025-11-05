import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState, useRef } from 'react'
import { MapPin, Building2, Mail, Phone, ArrowRight } from 'lucide-react'
import { Globe } from '@/components/ui/globe'

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

  // Service animations - slide in from sides
  useEffect(() => {
    const serviceObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate the main service container
            const serviceElement = entry.target as HTMLElement
            serviceElement.style.opacity = '1'

            // Animate child elements from sides
            const children =
              serviceElement.querySelectorAll('[data-slide-from]')
            children.forEach((child) => {
              const htmlChild = child as HTMLElement
              const direction = htmlChild.getAttribute('data-slide-from')

              // Set initial transform based on direction
              if (direction === 'left') {
                htmlChild.style.transform = 'translateX(0)'
                htmlChild.style.opacity = '1'
              } else if (direction === 'right') {
                htmlChild.style.transform = 'translateX(0)'
                htmlChild.style.opacity = '1'
              }
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    // Observe all service items
    const serviceItems = document.querySelectorAll('[data-service-animate]')
    serviceItems.forEach((item) => {
      const htmlItem = item as HTMLElement

      // Set initial transforms for children
      const children = htmlItem.querySelectorAll('[data-slide-from]')
      children.forEach((child) => {
        const htmlChild = child as HTMLElement
        const direction = htmlChild.getAttribute('data-slide-from')

        if (direction === 'left') {
          htmlChild.style.transform = 'translateX(-100px)'
          htmlChild.style.opacity = '0'
        } else if (direction === 'right') {
          htmlChild.style.transform = 'translateX(100px)'
          htmlChild.style.opacity = '0'
        }
      })

      serviceObserver.observe(item)
    })

    return () => serviceObserver.disconnect()
  }, [])

  const services = [
    {
      title: 'Pre-Approval Success',
      items: [
        'Site Survey and Feasibility Analysis',
        'Risk Mitigation Planning',
        'Lease Negotiation of Technical Exhibits',
        'Permit Expediting and Acceleration',
        'Vendor and GC Sourcing',
        'Capital Planning and Budgeting',
      ],
      image: '/images/1.jpeg',
    },
    {
      title: 'Project Management',
      items: [
        'Schedule and Milestone Tracking',
        'Project Monitoring and Reporting',
        'Tender Management and Awards',
        'Cost Reduction Analysis',
        'Change Management',
        'Strategic Process Implementation',
      ],
      image: '/images/2.jpeg',
    },
    {
      title: 'Post Opening Support',
      items: [
        'Maintenance Vendor Selection',
        'O&M Management',
        'Defects and Snaglist Closeout',
        'Warranty Period Monitoring',
        'Green Store Exits',
        'Fixture Recovery and Recycling',
      ],
      image: '/images/3.jpeg',
    },
  ]

  const regions = [
    {
      name: 'United Kingdom',
      cities: ['London', 'Leeds', 'Manchester'],
    },
    {
      name: 'France',
      cities: ['Paris', 'Marseille', 'Lyon', 'Strasbourg', 'Lille'],
    },
    {
      name: 'Spain',
      cities: ['Madrid', 'Barcelona', 'Valencia', 'Sevilla'],
    },
    {
      name: 'Italy',
      cities: ['Milan', 'Rome', 'Verona', 'Bologna'],
    },
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
          <p className="text-xl md:text-4xl font-semibold text-muted-foreground mb-8 max-w-4xl mx-auto mt-6">
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
          <div className="space-y-24">
            {services.map((service, index) => {
              const isEven = index % 2 === 1
              const delay = index * 200

              return (
                <div
                  key={index}
                  data-service-animate
                  className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center opacity-0 transition-all duration-800 ease-out`}
                  style={{
                    transitionDelay: `${delay}ms`,
                  }}
                >
                  {/* Image */}
                  <div
                    data-slide-from={isEven ? 'right' : 'left'}
                    className="w-full md:w-1/2 opacity-0 transition-all duration-800 ease-out"
                    style={{
                      transitionDelay: `${delay}ms`,
                    }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl aspect-[4/3] shadow-2xl w-full h-full object-cover"
                    />
                  </div>

                  {/* Text Content */}
                  <div
                    data-slide-from={isEven ? 'left' : 'right'}
                    className="w-full md:w-1/2 opacity-0 transition-all duration-800 ease-out"
                    style={{
                      transitionDelay: `${delay}ms`,
                    }}
                  >
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                      {service.title}
                    </h3>
                    <ul className="space-y-4">
                      {service.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-lg text-muted-foreground"
                        >
                          <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

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

          {/* Interactive Globe - Truncated Northern Hemisphere */}
          <div className="relative flex items-end justify-center h-[400px] md:h-[600px] -mt-16 md:-mt-36 -mb-48 md:mb-0 overflow-hidden">
            <Globe className="top-0" />
          </div>
        </div>
      </section>

      {/* Turnkey Solution Section */}
      <section
        id="turnkey"
        data-animate
        className={`-mt-24 py-24 px-6 bg-primary transition-all duration-1000 ${
          visibleSections.has('turnkey')
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-8">
            Turnkey Solutions
          </h2>
          <p className="text-2xl md:text-3xl text-primary-foreground/90 leading-relaxed font-light">
            From initial design to final execution, we provide complete turnkey
            solutions that deliver fully operational retail spaces with seamless
            integration and comprehensive support throughout every phase of your
            project.
          </p>
        </div>
      </section>

      {/* Geographic Coverage */}

      {/* <section
        className={`-mt-24 bg-secondary py-12 px-24 transition-all duration-1000 ${
          visibleSections.has('locations')
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 z-50">
          {regions.map((region, index) => (
            <div
              key={index}
              className="bg-card border-2 border-border rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:border-primary hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <Building2 className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold text-foreground">
                  {region.name}
                </h3>
              </div>
              <ul className="space-y-3">
                {region.cities.map((city, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm">{city}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section> */}

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
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Image */}
              <div className="w-full md:w-1/3 flex-shrink-0">
                <img
                  src="/images/douglas.jpeg"
                  alt="Douglas Deptula"
                  className="w-full aspect-square object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    Douglas Deptula
                  </h3>
                  <p className="text-xl text-muted-foreground mb-1">
                    Founder & Director
                  </p>
                  <p className="flex items-center gap-2 text-accent font-medium">
                    <MapPin className="w-4 h-4" />
                    Paris, France
                  </p>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Douglas is originally from the United States and has{' '}
                    <span className="text-primary font-semibold">
                      twenty years of varied experience
                    </span>{' '}
                    in the retail construction, project management and real
                    estate sectors. He has partnered with market leading
                    international retailers in their expansion across Europe and
                    North America and prides himself on making the experience
                    extraordinary.
                  </p>
                  <p>
                    Douglas is a hands-on team leader that is passionate about
                    understanding each client's specific program requirements
                    and developing custom solutions to help them succeed. He
                    believes in creating true partnerships with all project
                    stakeholders to leverage all skillsets and focus on
                    accomplishing one common goal.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 mt-6">
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
        <div className="mt-12 text-center">
          <a
            href="mailto:douglas@storecraftconsulting.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg font-semibold"
          >
            <Mail className="w-6 h-6" />
            Contact Us
          </a>
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
