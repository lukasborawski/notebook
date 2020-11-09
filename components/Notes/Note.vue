<template>
  <transition name="fade">
    <li v-show="visible" class="message mb-5" data-testid="test-note">
      <div class="message-header">
        <p>{{ itemProp.title }}</p>
        <button
          class="delete"
          aria-label="delete"
          data-testid="test-note-remove"
          @click="remove"
        />
      </div>
      <div class="message-body">
        <p>{{ itemProp.note }}</p>
        <span class="is-size-7 is-date">{{ dateFormatted }}</span>
      </div>
    </li>
  </transition>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { mapActions } from 'vuex'
// @ts-ignore
import dayjs from 'dayjs'
import { Note } from '~/types'

const itemProp: PropOptions<Note> = {
  type: Object,
}

export default Vue.extend({
  name: 'AppNote',
  props: {
    itemProp,
  },
  data: (): { visible: boolean } => ({
    visible: true,
  }),
  computed: {
    dateFormatted(): string {
      return dayjs(this.itemProp.date).format('DD MMMM YYYY')
    },
  },
  methods: {
    ...mapActions({
      removeNote: 'note/removeNote',
    }),
    remove(): void {
      this.visible = false
      setTimeout(() => {
        this.removeNote(this.itemProp.id)
      }, 500)
    },
  },
})
</script>

<style lang="scss" scoped>
@import './assets/style/_variables';

.is-date {
  color: dimgrey;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
