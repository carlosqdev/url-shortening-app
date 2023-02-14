import { describe, it, expect, afterEach } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'
import { CallToAction } from './CallToAction'

describe('CallToAction', () => {
  afterEach(cleanup)

  it('Should render a heading title', () => {

    render(<CallToAction />)

    const headingTitle = screen.getByRole('heading')

    expect(headingTitle).toBeDefined()
  })

  it('Should render a call to action text', () => {
    render(<CallToAction />)

    const callToActionText = screen.getByText(/boots your links today/i)

    expect(callToActionText).toBeDefined()
  })

  it('Should render call to action link', () => {
    render(<CallToAction />)

    const buttonGetStarted = screen.getByRole('link', {
      name: /get started/i
    })

    expect(buttonGetStarted).toBeDefined()
  })
})