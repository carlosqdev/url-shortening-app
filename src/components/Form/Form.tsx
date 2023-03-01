import { SyntheticEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState, AddDispatch } from '../../context/app/store'
import { Link, setLinks } from '../../context/features/linkSlice'
import './Form.css'

interface PropsFormToShorten {
  shorteLink: (link: string) => Promise<Link>
}

export const Form = ({ shorteLink }: PropsFormToShorten) => {
  // Hook
  const [link, setLink] = useState('')
  const [isEmptyInput, setIsEmptyInput] = useState(false)
  // Redux
  const { value, isGetting } = useSelector((state: RootState) => state.links)
  const dispatch: AddDispatch = useDispatch()

  const onSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()

    if (link.trim().length <= 0) {
      setIsEmptyInput(true)
    } else {
      const newLink = await shorteLink(link)

      dispatch(setLinks([...value, newLink]))
      setIsEmptyInput(false)
      setLink('')
    }
  }

  const handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    setLink(event.currentTarget.value)
  }

  return (
    <section className='form_wrapper'>
      <form className='form' onSubmit={onSubmit}>
        <input
          className={isEmptyInput ? 'form_input input_empty' : 'form_input'}
          value={link}
          aria-label='link-input'
          onChange={handleChange}
          type='text'
          placeholder='Shorten a link here...'
        />

        {isEmptyInput && <span className='form_span'>Please add a link</span>}

        {isGetting && (
          <span className='form_span_getting'>Getting link please wait...</span>
        )}

        <button
          disabled={isGetting}
          className={isGetting ? 'form_button_disabled' : 'form_button'}
        >
          Shorten It!
        </button>
      </form>
    </section>
  )
}
