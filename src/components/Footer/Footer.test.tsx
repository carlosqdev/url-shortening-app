import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'

import logo from '../../assets/images/logo.svg'

const Footer = () => {
  return(
    <footer>
      <img aria-label='logo-shortly' src={logo} alt="logo of Shortly" />

      <nav>
        <a href={menuFeatures[0].href}>{
          menuFeatures[0].title
        }</a>
        <menu>
          {menuFeatures[0]?.subTitle?.map(menu => (
            <a key={menu.title} href={menu.href}>{menu.title}</a>
          ))}
        </menu>
      </nav>
    </footer>
  )
}

interface Navigation {
  title: string
  href: string
  subTitle?: Navigation[]
}

const menuFeatures: Navigation[] = [
  {
    title: 'Features',
    href: '#',
    subTitle: [
      {
        title: 'Link Shortening',
        href: '#'
      },
      {
        title: 'Branded Link',
        href: '#'
      },
      {
        title: 'Analytics',
        href: '#'
      }
    ]
  },
]

const menuResources: Navigation[] = [
  {
    title: 'Resources',
    href: '#',
    subTitle: [
      {
        title: 'Blog',
        href: '#',
      },
      {
        title: 'Developers',
        href: '#',
      },
      {
        title: 'Support',
        href: '#',
      }
    ]
  },
]

const menuCompany: Navigation[] = [
  {
    title: 'Company',
    href: '#',
    subTitle: [
      {
        title: 'About',
        href: '#'
      },
      {
        title: 'Our Team',
        href: '#'
      },
      {
        title: 'Careers',
        href: '#'
      },
      {
        title: 'Contact',
        href: '#'
      },
    ]
  }
]


describe('Footer', () => {
  afterEach(cleanup)

  it('Should render', () => {
    render(<Footer />)
  })

  it('Should render logo', () => {
    render(<Footer />)

    const logo = screen.getByRole('img', {
      name: 'logo-shortly'
    })

    expect(logo).toBeDefined()
  })

  it('Should render navigation', () => {
    render(<Footer />)

    const navigation = screen.getByRole('navigation')

    expect(navigation).toBeDefined()
  })

  it('Should render a link with text Feature', () => {
    render(<Footer />)

    const linkFeature = screen.getByRole('link', {
      name: menuFeatures[0].title
    })

    expect(linkFeature).toBeDefined()
  })

  it('Must show several sublinks', () => {
    render(<Footer />)

    menuFeatures[0].subTitle?.forEach((feature) => {
      const linkFeature = screen.getByRole('link', {
        name: feature.title
      })

      expect(linkFeature).toBeDefined()
    })
  })
})
