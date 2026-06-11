export const formatPhone = (phone: string) => {
  // Basic Nairobi/Kenya phone formatting: +254 XXX XXX XXX
  const cleaned = ('' + phone).replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})(\d{3})$/)
  if (match) {
    return `+${match[1]} ${match[2]} ${match[3]} ${match[4]}`
  }
  return phone
}

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-KE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
