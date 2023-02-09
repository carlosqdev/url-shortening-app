import { screen, render, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import { MENU_LINKS, Navbar } from './Navbar'

describe('Navbar', () => {
	afterEach(cleanup)

	it('should render', () => {
		render(<Navbar />)
	})

	it('should has a navigation', () => {
		render(<Navbar />)

		const navigation = screen.getByRole('navigation')

		expect(navigation).toBeDefined()
	})

	it('should has menu links', () => {
		render(<Navbar />)

		MENU_LINKS.forEach((menu) => {
			const menuLink = screen.getByRole('link', {
				name: menu.name,
			})
			expect(menuLink).toBeDefined()
		})

	})

})