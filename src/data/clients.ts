export interface Client {
  name: string
  logo: string
  heightClass: string
}

export const clients: Client[] = [
  { name: 'Big Mamma', logo: '/logos/big-mamma.svg', heightClass: 'h-6' },
  { name: 'Skims', logo: '/logos/skims.svg', heightClass: 'h-6' },
  { name: 'Alo Yoga', logo: '/logos/alo.svg', heightClass: 'h-9' },
  { name: 'Foot Locker', logo: '/logos/foot-locker.svg', heightClass: 'h-6' },
  { name: 'Reformation', logo: '/logos/reformation.svg', heightClass: 'h-6' },
  { name: 'Nike', logo: '/logos/nike.svg', heightClass: 'h-6' },
  { name: 'Saucony', logo: '/logos/saucony.svg', heightClass: 'h-6' },
  { name: 'Frame Denim', logo: '/logos/frame-denim.svg', heightClass: 'h-6' },
  { name: 'Hollister', logo: '/logos/hollister.svg', heightClass: 'h-6' },
  { name: 'Abercrombie', logo: '/logos/abercrombie.svg', heightClass: 'h-6' },
  { name: 'Saint Sofia', logo: '/logos/saint-sofia.svg', heightClass: 'h-6' },
]
