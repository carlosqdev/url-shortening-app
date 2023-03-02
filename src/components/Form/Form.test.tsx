import { afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'

import { Form } from './Form'
import { store } from '../../context/app/store'

describe('FormToShorten', () => {
  afterEach(cleanup)

  it('Should not call the api without a link', () => {
    const mockFn = vi.fn()

    render(
      <Provider store={store}>
        <Form />
      </Provider>
    )

    const button = screen.getByRole('button', {
      name: /shorten it!/i
    })

    fireEvent.click(button)

    expect(mockFn).not.toBeCalled()
  })

  it('Should show alert to user when input is empty', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    )

    const button = screen.getByRole('button', {
      name: /shorten it!/i
    })

    fireEvent.click(button)

    setTimeout(() => {
      const span = screen.getByText(/please add a link/i)

      expect(span).toBeDefined()
    }, 5)
  })
})
