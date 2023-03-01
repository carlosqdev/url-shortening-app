import { describe, it, expect, afterEach } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { AdvancedStatistics } from './AdvancedStatistics'

describe('AdvancedStatistics', () => {
  afterEach(cleanup)

  it('should render', () => {
    render(<AdvancedStatistics />)

    expect(<AdvancedStatistics />).toBeDefined()
  })

  it('should render a title with text Advanced Statistics', () => {
    render(<AdvancedStatistics />)

    const title = screen.getByRole('heading', {
      name: /Advanced Statistics/
    })

    expect(title).toBeDefined()
  })

  it('should have a paragraph with more description', () => {
    render(<AdvancedStatistics />)

    const paragraph = screen.getByRole('presentation', {
      name: 'paragraph description'
    })

    expect(paragraph).toBeDefined()
  })
})
