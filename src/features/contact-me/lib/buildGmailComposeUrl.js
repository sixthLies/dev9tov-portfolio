export const buildGmailComposeUrl = ({ to, subject, body, cc, bcc }) => {
  const params = new URLSearchParams()

  params.set("view", "cm")
  params.set("fs", "1")

  if (to) params.set("to", to)
  if (subject) params.set("su", subject)
  if (body) params.set("body", body)
  if (cc) params.set("cc", cc)
  if (bcc) params.set("bcc", bcc)

  return `https://mail.google.com/mail/?${params.toString()}`
}
