import { Link } from '../Link/Link'
import { SvgFacebook, SvgTwitter, SvgPinterest, SvgInstagram } from '../Icons'
import './MenuSocial.css'

export const MenuSocial = () => {
  return (
    <menu className='menu_social'>
      <Link href='https://www.facebook.com'>
        <SvgFacebook />
      </Link>

      <Link href='https://www.twitter.com'>
        <SvgTwitter />
      </Link>

      <Link href='https://www.pinterest.com'>
        <SvgPinterest />
      </Link>

      <Link href='https://www.instagram.com'>
        <SvgInstagram />
      </Link>
    </menu>
  )
}
