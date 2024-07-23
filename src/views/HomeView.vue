<script setup lang="ts">
import ParticipantCountSettings from '@/components/ParticipantCountSettings.vue'
import { NDivider, NSwitch } from 'naive-ui'
import router from '@/router'
import { ref } from 'vue'

const handleChange = (isDynamicMode: boolean) => {
  if (isDynamicMode) {
    router.push('/dynamic')
  } else {
    router.push('/fixed')
  }
}

const isDynamicModeEnabled = ref(router.currentRoute.value.path === '/dynamic')
</script>

<template>
  <main>
    <ParticipantCountSettings></ParticipantCountSettings>

    <n-divider></n-divider>

    <div class="switch">
      <n-switch :on-change="handleChange" :default-value="isDynamicModeEnabled">
        <template #unchecked>
          Fixed mode
        </template>
        <template #checked>
          Dynamic Mode
        </template>
      </n-switch>
    </div>

    <RouterView></RouterView>
  </main>
</template>

<style scoped>

main {
  margin: 0 16px;
}

.switch {
  margin: auto;
  text-align: center;
}

</style>
