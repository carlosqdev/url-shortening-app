import { useCreateShortLink } from '../../hooks/useCreateShortLink'
import { useFormLink } from '../../hooks/useFormLink'
import './Form.css'

export const Form = () => {
  const { createShortLink, isCreating } = useCreateShortLink()
  const { link, isEmptyInput, onSubmit, onLinkChange } = useFormLink({
    createShortLink
  })

  return (
    <section className='form_wrapper'>
      <form className='form' onSubmit={onSubmit}>
        <input
          className={isEmptyInput ? 'form_input input_empty' : 'form_input'}
          value={link}
          aria-label='link-input'
          onChange={onLinkChange}
          type='text'
          placeholder='Shorten a link here...'
        />

        {isEmptyInput && <span className='form_span'>Please add a link</span>}

        {isCreating && (
          <span className='form_span_getting'>Getting link please wait...</span>
        )}

        <button
          disabled={isCreating}
          className={isCreating ? 'form_button_disabled' : 'form_button'}
        >
          Shorten It!
        </button>
      </form>
    </section>
  )
}
