import { Module, ActionTree, GetterTree, MutationTree } from 'vuex'
import { MainState, NotesState } from '~/types/store'
import { Note } from '~/types'

export const state: NotesState = {
  notes: [],
}

const mutations: MutationTree<NotesState> = {
  setNotes(state, payload: Note[]) {
    state.notes = payload
  },
}
const actions: ActionTree<NotesState, MainState> = {
  async saveNote({ state, commit }, payload: Note) {
    const { id } = payload
    await (this as any).$localForage.setItem(id, JSON.stringify(payload))
    commit('setNotes', [...state.notes, payload] as Note[])
  },
  async removeNote({ state, commit }, $id: string) {
    await $localForage.removeItem($id)
    comit('setNotes', state.notes.filter((note: Note) => note.id !== $id) as Note[])
  },
  async getNotes({ state, commit }) {
    commit('setNotes', [])
    if ((this as any).$localForage) {
      const keys = await (this as any).$localForage.keys()
      keys.map(async (key: string) => {
        const note = await (this as any).$localForage.getItem(key)
        commit('setNotes', [...state.notes, JSON.parse(note)] as Note[])
      })
    }
  },
}
const getters: GetterTree<NotesState, MainState> = {
  notes: ({ notes }) => notes,
}

const namespaced: boolean = true

export const note: Module<NotesState, MainState> = {
  namespaced,
  state,
  mutations,
  actions,
  getters,
}
