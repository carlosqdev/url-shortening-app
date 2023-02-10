import { useCallback, useState } from 'react'

import { Link } from '../../context/features/linkSlice'
import './ShortLink.css'

type PropsLink = Omit<Link, 'code'>

export const ShortLink = ({ original_link, full_short_link }: PropsLink) => {
  // Hooks
  const [wasCopied, setWasCopied] = useState(false)

  const handleButtonClick = useCallback(() => {
    setWasCopied(true)
    // copy full short link
    navigator.clipboard?.writeText(full_short_link)
  }, [])

  return (
    <li className='shortLink'>
      <p className='original'>{original_link}</p>
      <p className='short'>{full_short_link}</p>
      <button className={wasCopied ? 'button copied' : 'button'} onClick={handleButtonClick}>{wasCopied ? 'Copied!' : 'Copy'}</button>
    </li>
  )
}