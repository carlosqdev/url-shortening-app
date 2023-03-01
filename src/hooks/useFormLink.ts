import { SyntheticEvent, useState } from 'react'

interface Props {
  createShortLink: (link: string) => void
}

export const useFormLink = ({ createShortLink }: Props) => {
  const [link, setLink] = useState('')
  const [isEmptyInput, setIsEmptyInput] = useState(false)

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault()

    if (link.trim().length <= 0) {
      setIsEmptyInput(true)
    } else {
      createShortLink(link)
      setIsEmptyInput(false)
      setLink('')
    }
  }

  const onLinkChange = (event: SyntheticEvent<HTMLInputElement>) => {
    setLink(event.currentTarget.value)
  }

  return { link, isEmptyInput, onSubmit, onLinkChange }
}
