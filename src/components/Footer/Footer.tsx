import { FooterMenu } from '../FooterMenu/FooterMenu'
import { MenuSocial } from '../MenuSocial/MenuSocial'
import logo from '../../assets/images/logo.svg'
import './Footer.css'

export interface Navigation {
  title: string
  href: string
  subTitle?: Navigation[]
}

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer_wrapper'>
        <figure>
          <img
            className='footer_logo'
            aria-label='logo-shortly'
            src={logo}
            alt='logo of Shortly'
          />
        </figure>

        <nav className='footer_nav'>
          <FooterMenu dataMenu={menuFeatures} />
          <FooterMenu dataMenu={menuResources} />
          <FooterMenu dataMenu={menuCompany} />
          <MenuSocial />
        </nav>
      </div>
    </footer>
  )
}

export const menuFeatures: Navigation[] = [
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
  }
]

const menuResources: Navigation[] = [
  {
    title: 'Resources',
    href: '#',
    subTitle: [
      {
        title: 'Blog',
        href: '#'
      },
      {
        title: 'Developers',
        href: '#'
      },
      {
        title: 'Support',
        href: '#'
      }
    ]
  }
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
      }
    ]
  }
]
