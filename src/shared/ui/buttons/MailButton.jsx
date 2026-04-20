export const MailButton = ({ to, subject, body, children }) => {
  const params = new URLSearchParams()
  if (subject) params.set("subject", subject)
  if (body) params.set("body", body)

  const normalizedTo = typeof to === "string" ? to.replace(/^mailto:/i, "") : ""
  const href = `mailto:${normalizedTo}${params.toString() ? `?${params}` : ""}`

  return (
    <a className="mailto__btn mailto__link" href={href} rel="noreferrer">
      {children}
    </a>
  )
}
