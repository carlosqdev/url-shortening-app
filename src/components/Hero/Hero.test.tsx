import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach} from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  afterEach(cleanup)

  it('Should render a heading title', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading')

    expect(heading).toBeDefined()
  })

  it('Should render a paragraph like subtitle', () => {
    render(<Hero />)

    const paragraph = screen.getByRole('paragraph')

    expect(paragraph).toBeDefined()
  })

  it('Should render call to action link', () => {
    render(<Hero />)

    const buttonGetStarted = screen.getByRole('link', {
      name: /get started/i
    })

    expect(buttonGetStarted).toBeDefined()
  })
})