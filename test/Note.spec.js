import { render, fireEvent } from '@testing-library/vue'
import AppNote from '~/components/Notes/Note'

const itemProp = {
  date: new Date(),
  title: 'Test title',
  note: 'Test note',
  id: 123456,
}

describe('Notes', () => {
  test('It exists', () => {
    const { getByTestId } = render(AppNote, {
      props: { itemProp },
    })
    expect(getByTestId('test-note')).toBeInTheDocument()
  })
  test('It hides on remove action', async () => {
    // show html option
    const { getByTestId } = render(AppNote, {
      props: { itemProp },
    })
    await fireEvent.click(getByTestId('test-note-remove'))
    expect(getByTestId('test-note')).not.toBeVisible()
  })
})
