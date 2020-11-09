<template>
  <ul data-testid="test-notes">
    <app-note
      v-for="(item, index) in notesProp"
      :key="index"
      :item-prop="item"
    />
  </ul>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import AppNote from './Note.vue'
import { Note } from '~/types'

const notesProp: PropOptions<Note[]> = {
  type: Array,
}

export default Vue.extend({
  name: 'AppNotesList',
  components: {
    AppNote,
  },
  props: {
    notesProp,
  },
  data: () => ({}),
})
</script>

<style lang="scss" scoped></style>
