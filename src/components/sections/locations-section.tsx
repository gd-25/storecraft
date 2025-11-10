import { Globe } from '@/components/ui/globe'

interface LocationsSectionProps {
  visibleSections: Set<string>
}

export function LocationsSection({ visibleSections }: LocationsSectionProps) {
  return (
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

        <div className="relative flex items-end justify-center h-[400px] md:h-[600px] -mt-16 md:-mt-36 overflow-hidden">
          <Globe className="top-0" />
        </div>
      </div>
    </section>
  )
}
