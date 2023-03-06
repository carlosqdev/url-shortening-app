import { Link } from '../context/features/linkSlice'

export const BASE_API = 'https://api.shrtco.de/v2'

export async function getShortenLink(link: string): Promise<Link> {
  try {
    const response = await fetch(`${BASE_API}/shorten?url=${link}`)
    const json = await response.json()
    const { code, full_short_link, original_link }: Link = json.result
    return { code, full_short_link, original_link }
  } catch (err) {
    return { full_short_link: '', original_link: '', code: '404' }
  }
}
