import {
  reactive,
  computed,
  useContext,
  ComputedRef,
} from '@nuxtjs/composition-api'
import { NoteState } from '~/types/store'
import { Note } from '~/types'

export const state: NoteState = reactive({
  note: {},
  notes: [],
})

export default function useNotes(): {
  notes: ComputedRef<Note[]>
  getNotes: () => void
  saveNote: ($payload: Note) => void
  removeNote: (id: string) => void
} {
  const { $localForage }: Omit<any, never> = useContext()

  const setNotes = ($notes: Note[]) => {
    return (state.notes = $notes)
  }
  const saveNote = async ($payload: Note) => {
    const { id } = $payload
    await $localForage.setItem(id, JSON.stringify($payload))
    setNotes([...state.notes, $payload] as Note[])
  }
  const removeNote = async ($id: string) => {
    await $localForage.removeItem($id)
    setNotes(state.notes.filter((note: Note) => note.id !== $id) as Note[])
  }
  const getNotes = async () => {
    setNotes([] as Note[])
    if ($localForage) {
      const keys: string[] = await $localForage.keys()
      keys.map(async (key: string) => {
        const note = await $localForage.getItem(key)
        setNotes([...state.notes, JSON.parse(note)] as Note[])
      })
    }
  }

  return {
    notes: computed(() => state.notes),
    getNotes,
    saveNote,
    removeNote,
  }
}
