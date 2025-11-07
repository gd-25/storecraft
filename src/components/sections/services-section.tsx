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
