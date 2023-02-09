import { Navbar } from '../Navbar/Navbar'
import ShortlyLogo from '../../assets/images/logo.svg'
import HamburguerMenu from '../../assets/images/hamburguer_menu.svg'
import './Header.css'

export const Header = () => {
  return (
    <header className='header'>
      <div className='header_wrapper'>
        <figure>
          <img className='header_logo' aria-label='shortly logo' src={ShortlyLogo} alt="Shortly logo" />
        </figure>

        <input className='header_expand_menu' aria-label='expand-menu' type="checkbox" name="expand-menu" id="expand-menu" />

        <Navbar />

        <label className='header_label' htmlFor='expand-menu'>
          <figure>
            <img className='header_hamburguer_image' aria-label='hamburguer menu' src={HamburguerMenu} alt="hamburguer menu" />
          </figure>
        </label>
      </div>
    </header>
  )
}