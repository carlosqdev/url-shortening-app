import { useCallback, useState } from 'react'

import { Link } from '../../context/features/linkSlice'

type PropsLink = Omit<Link, 'code'>

export const ShortLink = ({ original_link, full_short_link }: PropsLink) => {
	// Hooks
	const [wasCopied, setWasCopied] = useState(false)

	const handleButtonClick = useCallback(() => {
		setWasCopied(true)
	}, [])

	return (
		<li>
			<p>{original_link}</p>
			<p>{full_short_link}</p>
			<button onClick={handleButtonClick}>{wasCopied ? 'Copied!' : 'Copy'}</button>
		</li>
	)
}