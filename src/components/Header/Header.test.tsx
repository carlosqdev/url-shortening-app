import { screen, render, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  afterEach(cleanup)

  it('Should have a logo image', () => {
    render(<Header />)

    const logo = screen.getByRole('img', {
      name: 'shortly logo'
    })

    expect(logo).toBeDefined()
  })

  it('Should have a checkbox', () => {
    render(<Header />)

    const inputCheckbox = screen.getByRole('checkbox', {
      name: 'expand-menu'
    })

    expect(inputCheckbox).toBeDefined()
  })

  it('Should have a hamburguer menu image', () => {
    render(<Header />)

    const imageHamburger = screen.getByRole('img',{
      name: 'hamburguer menu'
    })

    expect(imageHamburger).toBeDefined()
  })
})