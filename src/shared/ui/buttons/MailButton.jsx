export const MailButton = ({ to, subject, body, children }) => {
  const params = new URLSearchParams()
  if (subject) params.set("subject", subject)
  if (body) params.set("body", body)

  const href = `mailto:${to}${params.toString() ? `?${params}` : ""}`

  return (
    <button className="mailto__btn">
      <a className="mailto__link" href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    </button>
  )
}
