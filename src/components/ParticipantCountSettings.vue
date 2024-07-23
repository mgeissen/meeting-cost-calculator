<script setup lang="ts">

import { NButton, NIcon, NTag } from 'naive-ui'
import ParticipantCountInput from '@/components/ParticipantCountInput.vue'
import { useCostsStore } from '@/stores/costs'
import { Settings } from '@vicons/ionicons5'
import router from '@/router'

const costsStore = useCostsStore()

const goToAdmin = () => {
  router.push('/admin')
}

</script>

<template>
  <div class="participant-headline">
    <h2>Who is participating?
      <n-button strong secondary circle @click="goToAdmin()">
        <template #icon>
          <n-icon><Settings /></n-icon>
        </template>
      </n-button>

    </h2>
    <n-tag :bordered="false">
      Total count: {{ costsStore.totalCount() }}
    </n-tag>
  </div>
  <div class="inputs">
    <ParticipantCountInput v-for="participantType in costsStore.participantTypes"
                           :key="participantType.key"
                           :participant-key="participantType.key">
      {{ participantType.name }}
    </ParticipantCountInput>
  </div>
</template>

<style scoped>


.inputs {
  display: flex;
  flex-direction: row;
  gap: 8px;
}

.participant-headline {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

</style>