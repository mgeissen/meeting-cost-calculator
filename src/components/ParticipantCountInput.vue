<script setup lang="ts">
import { NInputNumber } from 'naive-ui'
import { useCostsStore } from '@/stores/costs'

defineProps({
  participantKey: {
    type: String,
    required: true,
  },
})

const costsStore = useCostsStore()

</script>

<template>
  <div class="container">
    <div><slot></slot></div>
    <n-input-number v-model:value="costsStore.counts[participantKey]" clearable />
  </div>
</template>

<style scoped>

.container {
  text-align: center;
}

</style>