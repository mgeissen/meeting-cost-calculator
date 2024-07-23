<script setup lang="ts">

import { useCostsStore } from '@/stores/costs'
import { NInputNumber } from 'naive-ui'

defineProps({
  participantType: {
    type: String,
    required: true
  }
})

const costsStore = useCostsStore()

</script>

<template>

<div>
  <div>Salary for {{ costsStore.getParticipantTypeByKey(participantType)!.name }}</div>
  <n-input-number v-model:value="costsStore.getParticipantTypeByKey(participantType)!.yearlySalary" clearable>
    <template #suffix>
      €/Year
    </template>
  </n-input-number>
</div>

</template>

<style scoped>

</style>