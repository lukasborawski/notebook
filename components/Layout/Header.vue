<template>
  <div class="container">
    <div class="columns is-vcentered py-4">
      <div class="column is-6">
        <nuxt-link :to="{ path: path.main }" tag="a">
          <img src="~/static/logo.png" alt="Logo" />
        </nuxt-link>
      </div>
      <div class="column is-6">
        <button
          class="button is-success is-pulled-right"
          type="button"
          @click="goToFormPage"
        >
          <span>Dodaj notatkę</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Route } from 'vue-router'
import { path } from '~/const'

export default Vue.extend({
  name: 'LayoutHeader',
  data: (): { path: {} } => ({
    path,
  }),
  methods: {
    goToFormPage(): Promise<Route> {
      return this.$router.push({
        path: path.form,
      })
    },
  },
})
</script>

<style lang="scss" scoped>
a {
  outline: 0 none;
}
img {
  margin-left: -15/16 + rem;
}
</style>
