import { describe, it, expect, afterEach } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'

import image from '../../assets/images/icon-fully-customizable.svg'
import { Feature } from './Feature'

describe('Feature', () => {
  afterEach(cleanup)

  it('should have a image', () => {
    render(
      <Feature
        img={image}
        title='Brand Recognition'
        description='Boost your brand recognition with each click'
      />
    )

    const img = screen.getByRole('img')

    expect(img).toBeDefined()
  })

  it('should have a title', () => {
    render(
      <Feature
        img={image}
        title='Brand Recognition'
        description='Boost your brand recognition with each click'
      />
    )

    const title = screen.getByRole('heading')

    expect(title).toBeDefined()
  })

  it('should have a paragraph', () => {
    render(
      <Feature
        img={image}
        title='Brand Recognition'
        description='Boost your brand recognition with each click'
      />
    )

    const paragraph = screen.getByRole('paragraph')

    expect(paragraph).toBeDefined()
  })
})
