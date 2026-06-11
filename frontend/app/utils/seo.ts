export const generateSeoMeta = (options: {
  title: string
  description: string
  image?: string
  url?: string
}) => {
  const siteName = 'Plaza Dental Clinic Nairobi'
  const fullTitle = `${options.title} | ${siteName}`
  const defaultImage = '/images/og-default.jpg'

  return {
    title: fullTitle,
    ogTitle: fullTitle,
    description: options.description,
    ogDescription: options.description,
    ogImage: options.image || defaultImage,
    twitterCard: 'summary_large_image' as const,
    ogUrl: options.url,
    ogType: 'website' as const
  }
}
