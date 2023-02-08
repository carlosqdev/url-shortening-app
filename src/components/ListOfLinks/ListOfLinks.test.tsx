import { screen, render, cleanup } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { Link } from '../../context/features/linkSlice'
import { ListOfLinks } from './ListOfLinks'

describe('ListOfLinks', () => {
	afterEach(cleanup)

	const links: Link[] = [
		{
			code: '1',
			original_link: 'http://google.com',
			full_short_link: 'http://gle.com'
		}
	]

	it('Should has a list item', async () => {
		render(<ListOfLinks links={links}/>)

		const listItem = await screen.findByRole('listitem')

		expect(listItem).toBeDefined()
	})

	it('Should has a lot of list elements', async () => {
		const dataLinks: Link[] = [
			{
				code: '1',
				original_link: 'http://google.com',
				full_short_link: 'http://gle.com'
			},
			{
				code: '2',
				original_link: 'http://youtube.com',
				full_short_link: 'http://tube.com'
			},
			{
				code: '3',
				original_link: 'http://facebook.com',
				full_short_link: 'http://book.com'
			},
		]

		render(<ListOfLinks links={dataLinks}/>)

		const listItem1 = await screen.findByText(dataLinks[0].original_link)
		const listItem2 = await screen.findByText(dataLinks[1].original_link)
		const listItem3 = await screen.findByText(dataLinks[2].original_link)

		expect(listItem1).toBeDefined()
		expect(listItem2).toBeDefined()
		expect(listItem3).toBeDefined()
	})
})