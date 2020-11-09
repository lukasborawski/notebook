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
// @ts-ignore
import dayjs from 'dayjs'
import { Ref, ref, computed } from '@nuxtjs/composition-api'
import { Note } from '~/types'
import useNotes from '~/composables/useNotes'

export default Vue.extend({
  name: 'AppNote',
  props: {
    itemProp: {
      type: Object,
      default: () => {},
    } as PropOptions<Note>,
  },
  setup({ itemProp }) {
    const visible: Ref<boolean> = ref(true)
    const dateFormatted = computed(() =>
      dayjs((itemProp as Note).date).format('DD MMMM YYYY')
    )
    const { removeNote } = useNotes()

    const remove = (): void => {
      const { id } = itemProp as Note
      visible.value = false
      setTimeout(() => {
        removeNote(id)
      }, 500)
    }
    return {
      visible,
      dateFormatted,
      remove,
    }
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
