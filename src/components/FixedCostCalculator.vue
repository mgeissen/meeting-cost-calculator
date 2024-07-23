<script setup lang="ts">

import { NDivider, NInputNumber } from 'naive-ui'
import { useCostsStore } from '@/stores/costs'
import TotalCosts from '@/components/TotalCosts.vue'

const costsStore = useCostsStore()

</script>

<template>
  <n-divider></n-divider>

  <div class="time-container">
    <div>How long is the meeting?</div>
    <n-input-number v-model:value="costsStore.minutes" clearable class="minute-input">
      <template #suffix>
        minutes
      </template>
    </n-input-number>
  </div>
  <n-divider />

  <TotalCosts mode="fixed"></TotalCosts>

</template>

<style scoped>
.time-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.minute-input {
  max-width: 200px;
}


</style>