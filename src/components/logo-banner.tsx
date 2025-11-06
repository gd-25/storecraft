export interface ClientLogo {
  name: string
  logo: string
  heightClass: string
}

interface LogoBannerProps {
  clients: ClientLogo[]
  className?: string
}

export function LogoBanner({ clients, className = '' }: LogoBannerProps) {
  return (
    <div className={`logo-slider ${className}`}>
      <div className="logo-track">
        {/* First set of logos */}
        {clients.map((client, index) => (
          <div key={`logo-1-${index}`} className="logo-slide">
            <img
              src={client.logo}
              alt={client.name}
              className={`${client.heightClass} mx-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500`}
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {clients.map((client, index) => (
          <div key={`logo-2-${index}`} className="logo-slide">
            <img
              src={client.logo}
              alt={client.name}
              className={`${client.heightClass} mx-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500`}
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {clients.map((client, index) => (
          <div key={`logo-3-${index}`} className="logo-slide">
            <img
              src={client.logo}
              alt={client.name}
              className={`${client.heightClass} mx-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
