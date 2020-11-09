<template>
  <layout-container>
    <template v-slot:content>
      <app-notes-list :notes-prop="notes" />
      <h4 v-if="noteBookIsEmpty" class="is-size-5">
        <span class="has-text-danger">Nie masz żadnych notatek.</span>
        <nuxt-link :to="{ path: path.form }">Dodaj nową teraz</nuxt-link>.
      </h4>
    </template>
  </layout-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { onBeforeMount, computed } from '@nuxtjs/composition-api'
import LayoutContainer from '~/components/Layout/Container.vue'
import AppNotesList from '~/components/Notes/List.vue'
import useNotes from '~/composables/useNotes'
import { path } from '~/const'

export default Vue.extend({
  name: 'PageIndex',
  setup() {
    const { notes, getNotes } = useNotes()
    const noteBookIsEmpty = computed(() => notes.value.length === 0)
    onBeforeMount(() => {
      getNotes()
    })
    return {
      path,
      notes,
      noteBookIsEmpty,
    }
  },
  components: {
    LayoutContainer,
    AppNotesList,
  },
})
</script>
