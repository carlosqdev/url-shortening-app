import { Link } from '../../context/features/linkSlice'
import { ShortLink } from '../ShortLink/ShortLink'

interface PropsListOfLinks {
	links: Link[]
}

export const ListOfLinks = ({ links }: PropsListOfLinks) => {
  return (
    <section>
      <ul>
        {links?.map(link => (
          <ShortLink
            key={link.code}
            full_short_link={link.full_short_link}
            original_link={link.original_link} />
        ))}
      </ul>
    </section>
  )
}