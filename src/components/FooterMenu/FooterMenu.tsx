import { Navigation } from '../Footer/Footer'
import './FooterMenu.css'

interface Props {
  dataMenu: Navigation[]
}

export const FooterMenu = ({ dataMenu }: Props) => {
  return (
    <menu className='footer_menu'>
      <a href={dataMenu[0].href}>{dataMenu[0].title}</a>

      <ul className='footer_sub_menu'>
        {dataMenu[0]?.subTitle?.map((menu) => (
          <li key={menu.title}>
            <a href={menu.href}>{menu.title}</a>
          </li>
        ))}
      </ul>
    </menu>
  )
}
