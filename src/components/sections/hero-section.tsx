export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 w-full mx-auto px-6 text-center">
        <img
          src="/storecraft-logo-black.svg"
          alt="Storecraft"
          className="h-32 md:h-40 mx-auto mb-6 animate-fade-in"
        />
        <p className="text-3xl md:text-4xl 2xl:text-5xl  font-medium text-muted-foreground mb-8 mx-auto mt-12 w-full max-w-4xl 2xl:max-w-7xl">
          Comprehensive project management consultancy specializing in retail
          and hospitality sectors
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-border rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  )
}
