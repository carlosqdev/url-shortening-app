interface MenuLinks {
  name: string;
  href: string;
}

export const MENU_LINKS: MenuLinks[] = [
	{
		name: 'Features',
		href: '#'
	},
	{
		name: 'Pricing',
		href: '#'
	},
	{
		name: 'Resources',
		href: '#'
	},
	{
		name: 'Login',
		href: '#'
	},
	{
		name: 'Sign Up',
		href: '#'
	}
]

export const Navbar = () => {
	return (
		<nav>
			<ul>
				{MENU_LINKS?.map((link) => (
					<li key={link.name}>
						<a href={link.href} >{link.name}</a>
					</li>
				))}
			</ul>
		</nav>
	)
}