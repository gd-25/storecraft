export interface Service {
  title: string
  items: string[]
  image: string
}

export const services: Service[] = [
  {
    title: 'Pre-Approval Success',
    items: [
      'Site Survey and Feasibility Analysis',
      'Risk Mitigation Planning',
      'Lease Negotiation of Technical Exhibits',
      'Permit Expediting and Acceleration',
      'Vendor and GC Sourcing',
      'Capital Planning and Budgeting',
    ],
    image: '/images/1.jpeg',
  },
  {
    title: 'Project Management',
    items: [
      'Schedule and Milestone Tracking',
      'Project Monitoring and Reporting',
      'Tender Management and Awards',
      'Cost Reduction Analysis',
      'Change Management',
      'Strategic Process Implementation',
    ],
    image: '/images/2.jpeg',
  },
  {
    title: 'Post Opening Support',
    items: [
      'Maintenance Vendor Selection',
      'O&M Management',
      'Defects and Snaglist Closeout',
      'Warranty Period Monitoring',
      'Green Store Exits',
      'Fixture Recovery and Recycling',
    ],
    image: '/images/3.jpeg',
  },
]
