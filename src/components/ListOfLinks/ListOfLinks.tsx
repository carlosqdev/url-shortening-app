import { Link } from '../../context/features/linkSlice'
import { ShortLink } from '../ShortLink/ShortLink'
import './ListOfLinks.css'

interface PropsListOfLinks {
	links: Link[]
}

export const ListOfLinks = ({ links }: PropsListOfLinks) => {
  return (
    <section className='listOfLinks'>
      <ul className='listOfLinks_wrapper'>
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