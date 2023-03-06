import { describe, it, expect } from 'vitest'
import { getShortenLink } from './get-shorten-link'

describe('getShortenLink', () => {
  it('Must handle errors appropriately', async () => {
    const result = await getShortenLink('no_es_una_url')
    expect(result.code).toBe('404')
    expect(result.full_short_link).toBe('')
    expect(result.original_link).toBe('')
  })
})
