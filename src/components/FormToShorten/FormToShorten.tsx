import { SyntheticEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState, AddDispatch } from '../../context/app/store'
import { Link, setLinks } from '../../context/features/linkSlice'

interface PropsFormToShorten {
  shorteLink: (link: string) => Promise<Link>
}

export const FormToShorten = ({ shorteLink }: PropsFormToShorten) => {
  // Hook
  const [link, setLink] = useState('')
  const [isEmptyInput, setIsEmptyInput] = useState(false)
  // Redux
  const links = useSelector((state: RootState) => state.links.value)
  const dispatch: AddDispatch = useDispatch()

  const onSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()

    if(link.trim().length <= 0) {
      setIsEmptyInput(true)
    } else {
      const newLink = await shorteLink(link)

      dispatch(setLinks([...links, newLink]))
      setIsEmptyInput(false)
      setLink('')
    }

  }

  const handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    setLink(event.currentTarget.value)
  }

  return(
    <form onSubmit={onSubmit}>
      <input
        value={link}
        aria-label='link-input'
        onChange={handleChange}
        type="text"
        placeholder="Shorten a link here..." />

      {isEmptyInput && <span>Please add a link</span>}

      <button>Shorten It!</button>
    </form>
  )
}