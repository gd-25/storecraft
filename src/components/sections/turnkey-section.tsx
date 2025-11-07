interface TurnkeySectionProps {
  visibleSections: Set<string>
}

export function TurnkeySection({ visibleSections }: TurnkeySectionProps) {
  return (
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
  )
}
