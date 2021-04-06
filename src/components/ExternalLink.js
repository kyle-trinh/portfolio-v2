import React from "react"

export default function ExternalLink({ href, children, ...props }) {
  return (
    <a rel="noopener noreferrer" target="_blank" href={href} {...props}>
      {children}
    </a>
  )
}
