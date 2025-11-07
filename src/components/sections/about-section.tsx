import { MapPin } from 'lucide-react'

interface AboutSectionProps {
  visibleSections: Set<string>
}

export function AboutSection({ visibleSections }: AboutSectionProps) {
  const partners = [
    'NBA',
    'Apple',
    'Fred Perry',
    'Skin Laundry',
    'Lee Jeans',
    'Nike',
    'Foot Locker',
    'Alo Yoga',
  ]

  return (
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
            <div className="w-full md:w-1/3 flex-shrink-0">
              <img
                src="/images/douglas.jpeg"
                alt="Douglas Deptula"
                className="w-full aspect-square object-cover rounded-2xl shadow-lg"
              />
            </div>

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
                  {partners.map((partner) => (
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
  )
}
