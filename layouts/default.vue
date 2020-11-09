<template>
  <div id="bulma-container">
    <layout-header />
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LayoutHeader from '~/components/Layout/Header.vue'

export default Vue.extend({
  name: 'Layout',
  components: {
    LayoutHeader,
  },
  data: () => ({}),
})
</script>
