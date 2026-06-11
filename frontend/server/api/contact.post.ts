/**
 * contact.post.ts
 * Purpose: Handle form submission via Resend API
 */
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()

  // Validate required fields
  const required = ['fullName', 'phone', 'email', 'service']
  for (const field of required) {
    if (!body[field]) {
      throw createError({ statusCode: 400, message: `Field ${field} is required` })
    }
  }

  try {
    // In a real build, we'd use the Resend API here.
    // For this prototype, we'll simulate success.
    console.log('Sending email with Resend:', body)
    
    // Example:
    // await $fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: { Authorization: `Bearer ${config.resendApiKey}` },
    //   body: { from: ..., to: ..., subject: ..., html: ... }
    // })

    return { success: true }
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      message: 'Failed to send appointment request'
    })
  }
})
