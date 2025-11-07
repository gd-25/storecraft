import { Mail } from 'lucide-react'

interface ContactSectionProps {
  visibleSections: Set<string>
}

export function ContactSection({ visibleSections }: ContactSectionProps) {
  return (
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
  )
}
