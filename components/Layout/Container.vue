<template>
  <section class="container">
    <slot name="content" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LayoutContainer',
  data: () => ({}),
})
</script>
