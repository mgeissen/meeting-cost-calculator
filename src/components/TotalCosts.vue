<script setup lang="ts">


import { useCostsStore } from '@/stores/costs'
import { ref } from 'vue'

const workingHoursPerYearFor40HoursWeek = 1700
const totalCostsEuro = ref(0)

const props = defineProps({
  mode: {
    type: String,
    validator: (value: string) => {
      return ['dynamic', 'fixed'].includes(value)
    },
    required: true
  }
})

const costsStore = useCostsStore()

costsStore.$subscribe((mutation, state) => {
  let newTotalCosts = 0
  Object.entries(state.counts).forEach(([participantKey, count]: [string, number]) => {
    let yearlySalary = state.participantTypes.find(pt => pt.key === participantKey)!.yearlySalary

    const actualYearlyWorkingHours = workingHoursPerYearFor40HoursWeek / 40 * state.hoursPerWeek
    const costPerSecond = yearlySalary / actualYearlyWorkingHours / 60 / 60

    const totalSeconds = props.mode === 'dynamic' ? state.runningSeconds : state.minutes * 60

    newTotalCosts += costPerSecond * count * totalSeconds
  })
  totalCostsEuro.value = Math.round(newTotalCosts * 100) / 100
})

</script>

<template>

  <div class="cost-container">
    <div>Total Costs</div>
    <div class="value">{{ totalCostsEuro }}€</div>
  </div>

</template>

<style scoped>
.cost-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  font-weight: bold;

  .value {
    font-size: 32px;
  }

}
</style>