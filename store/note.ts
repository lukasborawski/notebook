import { Module, ActionTree, GetterTree, MutationTree } from 'vuex'
import { MainState, NoteState } from '~/types/store'
import { Note } from '~/types'

export const state: NoteState = {
  note: {},
  notes: [],
}

const mutations: MutationTree<NoteState> = {
  setNotes(state, payload: Note[]) {
    state.notes = payload
  },
}
const actions: ActionTree<NoteState, MainState> = {
  async saveNote({ state, commit }, payload: Note) {
    const { id } = payload
    // JSON stringify add later/ask how to pass object
    await (this as any).$localForage.setItem(id, JSON.stringify(payload))
    commit('setNotes', [...state.notes, payload])
  },
  async removeNote({ state, commit }, id: string) {
    // suggest to filter array of notes
    await (this as any).$localForage.removeItem(id)
  },
  async getNotes({ state, commit }) {
    commit('setNotes', []) // add later as a bug of empty array
    if ((this as any).$localForage) {
      const keys = await (this as any).$localForage.keys()
      keys.map(async (key: string) => {
        const note = await (this as any).$localForage.getItem(key)
        commit('setNotes', [...state.notes, JSON.parse(note)])
      })
    }
  },
}
const getters: GetterTree<NoteState, MainState> = {
  notes: ({ notes }) => notes,
}

const namespaced: boolean = true

export const note: Module<NoteState, MainState> = {
  namespaced,
  state,
  mutations,
  actions,
  getters,
}
