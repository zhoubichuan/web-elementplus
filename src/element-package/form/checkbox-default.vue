<template>
  <div>
    <web-checkbox v-model="checked1" label="Option 1" />
    <web-checkbox v-model="checked2" label="Option 2" />
  </div>
  <div>
    <web-checkbox v-model="checked7" label="Option 1" disabled />
    <web-checkbox v-model="checked8" label="Option 2" disabled />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
const checked7 = ref(true)
const checked8 = ref(false)
</script>