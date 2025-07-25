<template>
  <web-steps :active="active" finish-status="success">
    <web-step title="Step 1" />
    <web-step title="Step 2" />
    <web-step title="Step 3" />
  </web-steps>

  <web-button style="margin-top: 12px" @click="next">Next step</web-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const active = ref(0)

const next = () => {
  if (active.value++ > 2) active.value = 0
}
</script>
