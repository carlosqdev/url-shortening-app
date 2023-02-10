import { render, screen, cleanup } from '@testing-library/react'
import { afterEach, describe, it, expect } from 'vitest'
import { GetStarted } from './GetStarted'

describe('GetStarted', () => {
  afterEach(cleanup)

  it('Should render a link', () => {
    render(<GetStarted />)

    const link = screen.getByRole('link')

    expect(link).toBeDefined()
  })
})