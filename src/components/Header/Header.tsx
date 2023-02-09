import ShortlyLogo from '../../assets/images/logo.svg'
import HamburguerMenu from '../../assets/images/hamburguer_menu.svg'
import './Header.css'

export const Header = () => {
  return (
    <header className='header'>
      <div className='header_wrapper'>
        <img className='header_logo' aria-label='shortly logo' src={ShortlyLogo} alt="Shortly logo" />

        <button className='header_button_hamburguer'>
          <img className='header_hamburguer_image' aria-label='hamburguer menu' src={HamburguerMenu} alt="hamburguer menu" />
        </button>
      </div>
    </header>
  )
}