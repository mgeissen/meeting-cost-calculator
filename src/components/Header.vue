<script setup lang="ts">

import { NDivider, NIcon } from 'naive-ui'
import { LogoEuro } from '@vicons/ionicons5'

</script>

<template>
  <header>
    <n-icon size="40">
      <LogoEuro />
    </n-icon>
    <h1>
      Meeting Cost Calculator
    </h1>
  </header>
  <n-divider title-placement="right" class="divider">Should we skip it?</n-divider>
</template>

<style scoped>

header {
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

h1 {
  text-align: center;
}

.divider {
  color: grey;
}

</style>