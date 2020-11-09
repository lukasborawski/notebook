<template>
  <form class="mt-4" data-testid="test-form" @submit.prevent="submit">
    <fieldset class="py-2">
      <label>
        <input
          v-model="formData.title"
          class="input is-normal"
          type="text"
          placeholder="Tytul notatki"
          minlength="10"
          required
          data-testid="test-form-input"
        />
      </label>
    </fieldset>
    <fieldset class="py-2">
      <label>
        <textarea
          v-model="formData.note"
          class="textarea is-normal"
          placeholder="Notatka"
          rows="10"
          minlength="30"
          required
        />
      </label>
    </fieldset>
    <div class="columns is-vcentered mt-1">
      <div class="column is-8">
        <span v-if="submitted" class="is-info is-size-5 is-success">
          Notatka dodana poprawnie.
          <nuxt-link :to="{ path: path.main }">Zobacz notatki</nuxt-link>.
        </span>
      </div>
      <div class="column is-4">
        <button
          class="button is-link is-normal is-pulled-right"
          :class="{ 'is-loading': submitting }"
          type="submit"
        >
          <span>Zapisz</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { reactive, ref, Ref } from '@nuxtjs/composition-api'
import { path } from '~/const'
import useNotes from '~/composables/useNotes'
import { Note } from '~/types'

export default Vue.extend({
  name: 'AppForm',
  setup() {
    const formData: Note = reactive({
      id: '',
      title: '',
      note: '',
      date: new Date(),
    })
    const submitted: Ref<boolean> = ref(false)
    const submitting: Ref<boolean> = ref(false)
    const { saveNote } = useNotes()

    const submit = (): void => {
      submitting.value = true
      setTimeout(async () => {
        try {
          await saveNote({
            ...formData,
            id: (Date.now() + Math.random()).toString().replace('.', ''),
          })
          submitted.value = true
        } catch (error) {
          // eslint-disable-next-line
          console.log('something went wrong', error as Error)
        } finally {
          submitting.value = false
        }
      }, 1000)
    }
    return {
      path,
      formData,
      submitted,
      submitting,
      submit,
    }
  },
})
</script>

<style lang="scss" scoped>
.is-info {
  color: forestgreen;
}
</style>
