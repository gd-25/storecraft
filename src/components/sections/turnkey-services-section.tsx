import { services } from '@/data/services'

interface TurnkeyServicesSectionProps {
  visibleSections: Set<string>
}

export function TurnkeyServicesSection({ visibleSections }: TurnkeyServicesSectionProps) {
  return (
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
        {/* Turnkey Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Turnkey Solutions or Individual Services - You Decide
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-4xl mx-auto">
            Choose the complete all-inclusive package or select the specific services you need.
            We adapt to your project requirements.
          </p>
        </div>

        {/* Visual Branching Flow */}
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-8">
            {/* Starting Point */}
            <div className="bg-foreground text-background px-8 py-4 rounded-lg shadow-lg">
              <span className="text-xl md:text-2xl font-semibold">Your Project Needs</span>
            </div>

            {/* Arrows Container */}
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start md:items-center w-full justify-center relative">
              {/* Center connecting lines */}
              <div className="hidden md:block absolute left-1/2 top-0 w-px h-12 bg-accent -translate-x-1/2 -translate-y-full"></div>

              {/* Left Path - Turnkey */}
              <div className="flex-1 flex flex-col items-center gap-4">
                <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <div className="bg-accent/10 border-2 border-accent px-6 py-4 rounded-lg text-center w-full max-w-xs">
                  <span className="text-lg md:text-xl font-semibold text-foreground">Complete Turnkey Package</span>
                  <p className="text-sm text-muted-foreground mt-2">All 3 services bundled</p>
                </div>
              </div>

              {/* Right Path - Individual */}
              <div className="flex-1 flex flex-col items-center gap-4">
                <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <div className="bg-accent/10 border-2 border-accent px-6 py-4 rounded-lg text-center w-full max-w-xs">
                  <span className="text-lg md:text-xl font-semibold text-foreground">Select Individual Services</span>
                  <p className="text-sm text-muted-foreground mt-2">Choose 1, 2, or all 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two Options Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 max-w-6xl mx-auto">
          {/* Left: Turnkey Package with Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <div className="col-span-2 relative">
                <img
                  src={services[0].image}
                  alt={services[0].title}
                  className="rounded-2xl shadow-2xl w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-2xl flex items-end p-4">
                  <span className="text-white text-xl font-bold">
                    Complete Package
                  </span>
                </div>
              </div>

              {/* Two smaller images */}
              <div className="relative">
                <img
                  src={services[1].image}
                  alt={services[1].title}
                  className="rounded-2xl shadow-2xl w-full h-32 object-cover"
                />
              </div>
              <div className="relative">
                <img
                  src={services[2].image}
                  alt={services[2].title}
                  className="rounded-2xl shadow-2xl w-full h-32 object-cover"
                />
              </div>
            </div>

            {/* All-Inclusive Badge */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-accent text-foreground px-6 py-2 rounded-full shadow-lg whitespace-nowrap">
              <span className="text-base md:text-lg font-semibold">All-Inclusive</span>
            </div>
          </div>

          {/* Right: Individual Services Cards */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-background border-2 border-accent/30 rounded-xl p-6 hover:border-accent transition-colors shadow-md"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-foreground mb-1">
                      {service.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {service.items.length} key services
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-center pt-2">
              <p className="text-sm text-muted-foreground italic">Select any combination you need</p>
            </div>
          </div>
        </div>

        {/* Individual Services Details */}
        <div className="space-y-24 mt-32">
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
                <div
                  data-slide-from={isEven ? 'right' : 'left'}
                  className="w-full md:w-120 opacity-0 transition-all duration-800 ease-out"
                  style={{
                    transitionDelay: `${delay}ms`,
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl aspect-4/3 shadow-2xl w-full h-full object-cover"
                  />
                </div>

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
  )
}
