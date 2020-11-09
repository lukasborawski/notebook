<template>
  <layout-container>
    <template v-slot:content>
      <app-form />
    </template>
  </layout-container>
</template>

<script lang="ts">
import Vue from 'vue'
import AppForm from '~/components/Notes/Form.vue'
import LayoutContainer from '~/components/Layout/Container.vue'

export default Vue.extend({
  name: 'PageForm',
  components: {
    AppForm,
    LayoutContainer,
  },
  data: () => ({}),
})
</script>

<style lang="scss" scoped>
@import './assets/style/_variables';
</style>
