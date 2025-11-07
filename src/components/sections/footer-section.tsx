export function FooterSection() {
  return (
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
  )
}
