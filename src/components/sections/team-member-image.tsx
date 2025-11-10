interface TeamMemberImageProps {
  image: string | null
  name: string
  variant: 'featured' | 'standard'
  linkedin?: string
  grayscale?: boolean
}

export function TeamMemberImage({
  image,
  name,
  variant,
  linkedin,
  grayscale = false,
}: TeamMemberImageProps) {
  const sizeClasses = variant === 'featured' ? 'w-28 h-28 md:w-48 md:h-48' : 'w-28 h-28'
  const imageClasses = `${sizeClasses} aspect-square object-cover rounded-full shadow-md hover:shadow-xl transition-shadow ${grayscale ? 'grayscale' : ''}`

  const imageElement = image ? (
    <img src={image} alt={name} className={imageClasses} />
  ) : (
    <div className="w-full h-full aspect-square bg-accent/20 rounded-full shadow-md flex items-center justify-center hover:shadow-xl transition-shadow">
      <span className="text-2xl font-bold text-accent">
        {name
          .split(' ')
          .map((n) => n[0])
          .join('')}
      </span>
    </div>
  )

  if (linkedin) {
    return (
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={`${sizeClasses} flex-shrink-0 cursor-pointer`}
      >
        {imageElement}
      </a>
    )
  }

  return <div className={`${sizeClasses} flex-shrink-0`}>{imageElement}</div>
}
