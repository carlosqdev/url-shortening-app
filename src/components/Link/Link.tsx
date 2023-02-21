import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  href: string
}

export const Link = ({ children, href }: Props) => {
  return (
    <li>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        {children}
      </a>
    </li>
  )
}
