import { screen, render, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
	afterEach(cleanup)

	it('Should have a logo image', () => {
		render(<Header />)

		const logo = screen.getByRole('img', {
			name: 'shortly logo'
		})

		expect(logo).toBeDefined()
	})

	it('Should have a hamburger button', () => {
		render(<Header />)

		const hambugerButton = screen.getByRole('button')

		expect(hambugerButton).toBeDefined()
	})

	it('Should have into hamburguer button a image', () => {
		render(<Header />)

		const imageHamburger = screen.getByRole('img',{
			name: 'hamburguer menu'
		})

		expect(imageHamburger).toBeDefined()
	})
})