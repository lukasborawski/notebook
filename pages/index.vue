<template>
  <layout-container>
    <template v-slot:content>
      <app-notes-list :notes-prop="notes" />
    </template>
  </layout-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import LayoutContainer from '~/components/Layout/Container.vue'
import AppNotesList from '~/components/Notes/List.vue'

export default Vue.extend({
  name: 'PageIndex',
  components: {
    LayoutContainer,
    AppNotesList,
  },
  computed: {
    ...mapGetters({
      notes: 'note/notes',
    }),
  },
  created(): void {
    this.getNotes()
  },
  methods: {
    ...mapActions({
      getNotes: 'note/getNotes',
    }),
  },
})
</script>

<style lang="scss" scoped></style>
