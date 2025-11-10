import { TeamMemberCard } from './team-member-card'

interface AboutSectionProps {
  visibleSections: Set<string>
}

export function AboutSection({ visibleSections }: AboutSectionProps) {
  const teamMembers = [
    {
      name: 'Douglas Deptula',
      title: 'Founder & Director',
      image: '/images/douglas.jpeg',
      bio: "Douglas is originally from the United States and has twenty years of varied experience in the retail construction, project management and real estate sectors. He has partnered with market leading international retailers in their expansion across Europe and North America and prides himself on making the experience extraordinary.\n\nDouglas is a hands-on team leader that is passionate about understanding each client's specific program requirements and developing custom solutions to help them succeed. He believes in creating true partnerships with all project stakeholders to leverage all skillsets and focus on accomplishing one common goal.",
      linkedin: 'https://www.linkedin.com/in/douglas-deptula-a9415963/',
      featured: true,
    },
    {
      name: 'Jad Zawil',
      title: 'Senior Project Manager',
      image: '/images/jad.jpeg',
      bio: 'Experienced Project Manager with five years delivering projects across Europe, specializing in retail and luxury retail. Civil Engineering background with expertise in resource management, stakeholder coordination, and seamless execution.',
      linkedin: 'https://www.linkedin.com/in/jad-zawil-39034112/',
      featured: false,
    },
    {
      name: 'Victoria Wheble',
      title: 'Operations Manager',
      image: '/images/victoria.jpeg',
      bio: 'Experienced Operations Manager with extensive skills in the Project Management industry. Currently managing retail fixture programmes across EMEA at Google with previous experience in full store fit out project management.',
      linkedin: 'https://www.linkedin.com/in/victoria-wheble-a2637944/',
      featured: false,
    },

    {
      name: 'Valentina Annepiras',
      title: 'Project Coordinator',
      image: '/images/valentina.jpeg',
      bio: 'Experienced Architect, Construction PM and Interior Designer working worldwide with proven experience in the fields of retail and hospitality. Specialised in reuse of heritage buildings and coordination of project from concept development to construction.',
      linkedin: 'https://www.linkedin.com/in/valentinannepiras/',
      featured: false,
    },
    {
      name: 'Luke Ford',
      title: 'Project Manager',
      image: null,
      bio: 'Experienced Project Manager with a vast portfolio of successfully delivered projects across multiple sectors. Proven track record overseeing hundreds of initiatives spanning Retail, Leisure, Technology and Food & Beverage.',
      linkedin: 'https://www.linkedin.com/in/luke-ford-8ab15b9b/',
      featured: false,
    },
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
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Team
          </h2>
        </div>

        {/* Unified Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`h-full ${member.featured ? 'md:col-span-2' : ''}`}
            >
              <TeamMemberCard
                name={member.name}
                title={member.title}
                image={member.image}
                bio={member.bio}
                linkedin={member.linkedin}
                variant={member.featured ? 'featured' : 'standard'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
