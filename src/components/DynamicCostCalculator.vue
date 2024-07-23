<script setup lang="ts">

import { NButton, NDivider } from 'naive-ui'
import TotalCosts from '@/components/TotalCosts.vue'
import { ref } from 'vue'
import { useCostsStore } from '@/stores/costs'

const costsStore = useCostsStore()

const isTimerRunning = ref(false)
const wasAlreadyStarted = ref(false)
const timerValue = ref('00:00:00')

let intervalRef: number | null = null

const setNewTimerValue = () => {
  const hours = Math.floor(costsStore.runningSeconds / 3600)
  const minutes = Math.floor((costsStore.runningSeconds % 3600) / 60)
  const seconds = costsStore.runningSeconds % 60

  timerValue.value = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

const handleTimerClick = () => {
  isTimerRunning.value = !isTimerRunning.value
  if (isTimerRunning.value) {
    startTimer()
  } else {
    stopTimer()
  }
}

const startTimer = () => {
  wasAlreadyStarted.value = true
  intervalRef = setInterval(() => {
    costsStore.incrementRunningSeconds()
    setNewTimerValue()
  }, 1000)
}

const stopTimer = () => {
  if (intervalRef) {
    clearInterval(intervalRef)
  }
  intervalRef = null

}

const resetTimer = () => {
  wasAlreadyStarted.value = false
  costsStore.resetRunningSeconds()
  timerValue.value = '00:00:00'
}

</script>

<template>
  <n-divider></n-divider>
  <div class="container">
    <n-button strong secondary @click="resetTimer" v-if="!isTimerRunning && wasAlreadyStarted">
      Reset
    </n-button>
    <n-button strong secondary @click="handleTimerClick" type="primary">
      {{ isTimerRunning ? 'Stop' : 'Start' }} timer
    </n-button>
    <div class="timer">
      {{ timerValue }}
    </div>
  </div>
  <n-divider></n-divider>

  <TotalCosts mode="dynamic"></TotalCosts>

</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-items: center;
  justify-content: center;

  .timer {
    font-size: 20px;
  }

}

</style>