import { screen, render, cleanup, fireEvent } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { Link } from '../../context/features/linkSlice'
import { ShortLink } from './ShortLink'

describe('ShortLink', () => {
  afterEach(cleanup)

  const oneLink: Link = {
    code: '1',
    original_link: 'http://google.com',
    full_short_link: 'http://gle.com'
  }

  it('Should has a original_link', () => {
    render(<ShortLink
      original_link={oneLink.original_link}
      full_short_link={oneLink.full_short_link} /> )

    const originalLink = screen.getByText(oneLink.original_link)

    expect(originalLink).toBeDefined()
  })

  it('Should has a full_short_link', () => {
    render(<ShortLink
      original_link={oneLink.original_link}
      full_short_link={oneLink.full_short_link} /> )

    const fullShortLink = screen.getByText(oneLink.full_short_link)

    expect(fullShortLink).toBeDefined()
  })

  it('Should has a button with a text "copy"', () => {
    render(<ShortLink
      original_link={oneLink.original_link}
      full_short_link={oneLink.full_short_link} /> )

    const button = screen.getByRole('button', {
      name: /copy/i,
    })

    expect(button).toBeDefined()
  })

  it('Should button text change to copied after click', async () => {
    render(<ShortLink
      original_link={oneLink.original_link}
      full_short_link={oneLink.full_short_link} /> )

    const button = screen.getByRole('button', {
      name: /copy/i,
    })

    fireEvent.click(button)

    const buttonAfterClick = await screen.getByRole('button', {name: /copied!/i})

    expect(buttonAfterClick).toBeDefined()
  })

})
