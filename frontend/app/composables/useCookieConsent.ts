export const useCookieConsent = () => {
  const consent = useState<boolean | null>('cookie-consent', () => null)

  const acceptAll = () => {
    consent.value = true
    // Logic to enable GA4 would go here
  }

  const rejectAll = () => {
    consent.value = false
  }

  return {
    consent,
    acceptAll,
    rejectAll
  }
}
