<template>
  <div>
    <n-button strong secondary @click="goBack()">
      Back
    </n-button>

    <h1>Settings</h1>

    <div>

      <div>
        <div>Weekly working hours</div>
        <n-input-number v-model:value="costsStore.hoursPerWeek" clearable>
          <template #suffix>
            h/week
          </template>
        </n-input-number>
      </div>

      <n-divider></n-divider>

      <ParticipantTypeSettings v-for="participantType in costsStore.participantTypes"
                               :key="participantType.key"
                               :participant-type="participantType.key"></ParticipantTypeSettings>
    </div>
  </div>
</template>

<style>

</style>
<script setup lang="ts">
import ParticipantTypeSettings from '@/components/ParticipantTypeSettings.vue'
import { useCostsStore } from '@/stores/costs'
import router from '@/router'
import { NButton, NDivider, NInputNumber } from 'naive-ui'

const costsStore = useCostsStore()

const goBack = () => {
  router.push('/')
}


</script>