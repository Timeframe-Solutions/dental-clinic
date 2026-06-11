export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'Plaza Dental Clinic',
    image: 'https://www.plazadental.co.ke/images/hero-bg.webp',
    '@id': 'https://www.plazadental.co.ke',
    url: 'https://www.plazadental.co.ke',
    telephone: '[PHONE]',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '[ADDRESS]',
      addressLocality: 'Nairobi',
      addressCountry: 'KE'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -1.286389,
      longitude: 36.817223
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '09:30',
        closes: '16:30'
      }
    ],
    sameAs: [
      'https://www.facebook.com/plazadentalnairobi',
      'https://www.instagram.com/plazadentalnairobi'
    ]
  }
}

export const generateBreadcrumbSchema = (crumbs: { name: string; item: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.item
    }))
  }
}
