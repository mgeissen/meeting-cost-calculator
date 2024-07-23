<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
</script>

<template>
  <header>
    <Header></Header>
  </header>

  <div class="content">
    <RouterView />
  </div>
</template>

<style scoped>
.content {
  margin: auto;
  max-width: 1200px;
}
</style>
