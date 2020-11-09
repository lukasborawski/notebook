import Vuex from 'vuex'
import { MainState } from '../types/store'
import { note } from './note'

const Store = () => {
  return new Vuex.Store<MainState>({
    state: {
      version: '1.0',
      $localForage: {}
    },
    modules: {
      note,
    },
  })
}

export default Store
