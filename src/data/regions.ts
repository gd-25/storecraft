export interface Region {
  name: string
  cities: string[]
}

export const regions: Region[] = [
  {
    name: 'United Kingdom',
    cities: ['London', 'Leeds', 'Manchester'],
  },
  {
    name: 'France',
    cities: ['Paris', 'Marseille', 'Lyon', 'Strasbourg', 'Lille'],
  },
  {
    name: 'Spain',
    cities: ['Madrid', 'Barcelona', 'Valencia', 'Sevilla'],
  },
  {
    name: 'Italy',
    cities: ['Milan', 'Rome', 'Verona', 'Bologna'],
  },
  {
    name: 'DACH',
    cities: ['Berlin', 'Hamburg', 'Frankfurt', 'Zurich', 'Vienna'],
  },
  { name: 'USA', cities: ['Miami', 'New York', 'Los Angeles'] },
]
