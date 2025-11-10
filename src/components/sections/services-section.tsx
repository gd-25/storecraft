import { services } from '@/data/services'

interface ServicesSectionProps {
  visibleSections: Set<string>
}

export function ServicesSection({ visibleSections }: ServicesSectionProps) {
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
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => {
            const delay = index * 200

            return (
              <div
                key={index}
                data-service-animate
                className="flex flex-col gap-6 opacity-0 transition-all duration-800 ease-out"
                style={{
                  transitionDelay: `${delay}ms`,
                }}
              >
                <div
                  data-slide-from="bottom"
                  className="w-full opacity-0 transition-all duration-800 ease-out"
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
                  data-slide-from="bottom"
                  className="w-full opacity-0 transition-all duration-800 ease-out"
                  style={{
                    transitionDelay: `${delay + 100}ms`,
                  }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <div className="flex flex-col gap-2">
                    {service.items.map((item, i) => (
                      <span
                        key={i}
                        className="self-start inline-block px-3 py-1.5 font-medium rounded-full bg-accent/10 text-foreground border border-accent/20 hover:bg-accent/20 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-48">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Turnkey Solutions
          </h2>
        </div>

        {/* Turnkey Solutions Section */}
        <div className="mt-12 text-center">
          <div className="max-w-4xl mx-auto bg-accent/5 border-2 border-accent/30 rounded-2xl px-12 py-8">
            <div className="flex flex-col items-center gap-4">
              {/* First bordered div with collage and 3 core services */}
              <div className="border-2 border-accent/30 rounded-md p-6 md:px-12 bg-background/50 max-w-3xl flex items-center justify-start gap-6">
                {/* Image Collage - Stacked */}
                <div className="relative h-44 w-64 hidden md:block">
                  <img
                    src={services[0].image}
                    alt={services[0].title}
                    className="absolute top-0 left-16 h-24 aspect-4/3 rounded-lg object-cover shadow-lg "
                    style={{ zIndex: 3 }}
                  />
                  <img
                    src={services[1].image}
                    alt={services[1].title}
                    className="absolute top-16 left-0 h-24 aspect-4/3 rounded-lg object-cover shadow-lg "
                    style={{ zIndex: 2 }}
                  />
                  <img
                    src={services[2].image}
                    alt={services[2].title}
                    className="absolute top-20 left-30 h-24 aspect-4/3 rounded-lg object-cover shadow-lg "
                    style={{ zIndex: 3 }}
                  />
                </div>

                <div className="flex flex-col items-start gap-3 text-lg md:text-2xl text-foreground font-semibold">
                  <span>Pre-Approval Success</span>
                  <span>Project Management</span>
                  <span>Post Opening Support</span>
                </div>
              </div>

              {/* Additional service 1 */}
              <div className="flex flex-col items-center gap-3">
                <span className="text-accent text-2xl">+</span>
                <div className="border-2 border-accent/30 rounded-md p-4 bg-background/50 w-full max-w-md">
                  <div className="text-lg md:text-2xl text-foreground font-semibold -mb-1">
                    Technical Store Design
                  </div>
                </div>
              </div>

              {/* Additional service 2 */}
              <div className="flex flex-col items-center gap-3">
                <span className="text-accent text-2xl">+</span>
                <div className="border-2 border-accent/30 rounded-md p-4 bg-background/50 w-full max-w-md">
                  <div className="text-lg md:text-2xl text-foreground font-semibold -mb-1">
                    Construction Fit Out Execution
                  </div>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground mt-12 text-lg">
              Everything you need in one complete package
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
