import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { Footer, menuFeatures } from './Footer'

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
