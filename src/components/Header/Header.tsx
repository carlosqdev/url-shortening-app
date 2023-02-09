import ShortlyLogo from '../../assets/images/logo.svg'
import HamburguerMenu from '../../assets/images/hamburguer_menu.svg'

export const Header = () => {
	return (
		<header>
			<img aria-label='shortly logo' src={ShortlyLogo} alt="Shortly logo" />

			<button>
				<img aria-label='hamburguer menu' src={HamburguerMenu} alt="hamburguer menu" />
			</button>
		</header>
	)
}