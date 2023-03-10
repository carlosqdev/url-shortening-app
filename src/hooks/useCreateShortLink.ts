import { useDispatch, useSelector } from 'react-redux'
import { AddDispatch, RootState } from '../context/app/store'
import { setError, setIsGetting, setLinks } from '../context/features/linkSlice'
import { getShortenLink } from '../services/get-shorten-link'

export const useCreateShortLink = () => {
  // Redux
  const { value, isCreating, error } = useSelector(
    (state: RootState) => state.links
  )
  const dispatch: AddDispatch = useDispatch()

  async function createShortLink(link: string) {
    dispatch(setIsGetting(true))
    dispatch(setError(''))

    const { code, full_short_link, original_link } = await getShortenLink(link)

    if (code === '404') {
      dispatch(setIsGetting(false))
      dispatch(setError('Has occurred error to create, please try again'))
      return
    }

    dispatch(setLinks([...value, { code, full_short_link, original_link }]))
    dispatch(setIsGetting(false))
  }

  return { createShortLink, isCreating, error }
}
