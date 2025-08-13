<template>
  <div>
    <web-checkbox v-model="checked1" label="Option 1" size="small" />
    <web-checkbox v-model="checked2" label="Option 2" size="small" />
  </div>
  <div>
    <web-checkbox v-model="checked7" label="Option 1" size="small" disabled />
    <web-checkbox v-model="checked8" label="Option 2" size="small" disabled />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
const checked7 = ref(true)
const checked8 = ref(false)
</script>