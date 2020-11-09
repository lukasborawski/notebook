import { render } from '@testing-library/vue'
import AppNotes from '~/components/Notes/List'

describe('Notes', () => {
  const { getByTestId } = render(AppNotes, {
    props: {
      notesProp: [
        {
          date: new Date(),
          title: 'Test title',
          note: 'Test note',
          id: 123456,
        },
      ],
    },
  })
  const notes = getByTestId('test-notes')
  const note = getByTestId('test-note')

  test('It exists', () => {
    expect(notes).toBeInTheDocument()
  })
  test('It includes notes', () => {
    expect(notes).toContainElement(note)
  })
})
