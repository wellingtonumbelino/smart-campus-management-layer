<script setup>
import { computed } from 'vue';
import { RouterView, useRoute } from 'vue-router';

const route = useRoute();
const title = computed(() => route.meta.pageTitle || 'Default Title');
</script>

<template>
  <main id="page-content" class="page-content">
    <HeaderTitle :title="title" />
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
#page-content {
  border: 0.0625rem solid #e2e8f0;
  border-radius: 0.375rem;
  padding: 1rem;
}
</style>
