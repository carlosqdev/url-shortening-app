import { rest } from 'msw'
import { BASE_API } from '../services/get-shorten-link'

export const resultLink = {
  code: 'MoCkEd',
  full_short_link: 'https://shrtco.de/MoCkEd',
  original_link: 'https://example.org/very/long/link.html'
}

export const handlers = [
  rest.get(`${BASE_API}/shorten`, (req, res, ctx) => {
    const url = req.url.searchParams.get('url')

    if (!url) {
      return res(ctx.status(400), ctx.json({ err: 'No URL provided' }))
    }

    return res(ctx.status(201), ctx.json(resultLink))
  })
]
