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
        <a
          href="https://www.linkedin.com/company/storecraftconsulting"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-4 hover:opacity-80 transition-opacity"
        >
          <img
            src="/logos/linkedin.svg"
            alt="LinkedIn"
            className="h-6 w-6 mx-auto invert"
          />
        </a>
        <p className="text-primary-foreground/60 text-sm">
          © {new Date().getFullYear()} Storecraft. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
