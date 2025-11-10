import { TeamMemberImage } from './team-member-image'

interface TeamMemberCardProps {
  name: string
  title: string
  image: string | null
  bio: string | React.ReactNode
  linkedin?: string
  variant: 'featured' | 'standard'
  className?: string
}

export function TeamMemberCard({
  name,
  title,
  image,
  bio,
  linkedin,
  variant,
  className = '',
}: TeamMemberCardProps) {
  const isFeatured = variant === 'featured'
  const paddingClasses = isFeatured ? 'p-8 md:p-12' : 'p-6'
  const nameSize = isFeatured ? 'text-2xl md:text-3xl' : 'text-2xl'
  const titleSize = isFeatured ? 'text-lg md:text-xl' : 'text-lg'
  const bioSize = isFeatured ? 'text-base md:text-lg' : 'text-base'
  const layoutClasses = isFeatured
    ? 'flex-col md:flex-row gap-8'
    : 'flex-col md:flex-row gap-6'

  return (
    <div
      className={`h-full bg-card border border-border rounded-2xl ${paddingClasses} shadow-lg ${className}`}
    >
      <div className={`flex ${layoutClasses} items-center md:items-start`}>
        <TeamMemberImage
          image={image}
          name={name}
          variant={variant}
          linkedin={linkedin}
          grayscale={!isFeatured}
        />

        <div className={`flex-1 ${isFeatured ? 'space-y-6' : ''}`}>
          <div className="text-center md:text-left">
            {linkedin ? (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <h3
                  className={`${nameSize} font-bold text-foreground hover:underline`}
                >
                  {name}
                </h3>
              </a>
            ) : (
              <h3 className={`${nameSize} font-bold text-foreground`}>
                {name}
              </h3>
            )}
            <p className={`${titleSize} text-muted-foreground mb-1`}>{title}</p>
          </div>

          {typeof bio === 'string' ? (
            <p
              className={`${bioSize} whitespace-pre-wrap text-muted-foreground leading-relaxed ${isFeatured ? '' : 'mt-2'}`}
            >
              {bio}
            </p>
          ) : (
            bio
          )}
        </div>
      </div>
    </div>
  )
}
