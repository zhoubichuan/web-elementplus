<template>
  <div>
    <web-checkbox v-model="checked1" label="Option 1" size="large" />
    <web-checkbox v-model="checked2" label="Option 2" size="large" />
  </div>
  <div>
    <web-checkbox v-model="checked3" label="Option 1" />
    <web-checkbox v-model="checked4" label="Option 2" />
  </div>
  <div>
    <web-checkbox v-model="checked5" label="Option 1" size="middle" />
    <web-checkbox v-model="checked6" label="Option 2" size="middle" />
  </div>
  <div>
    <web-checkbox v-model="checked7" label="Option 1" size="middle" disabled />
    <web-checkbox v-model="checked8" label="Option 2" size="middle" disabled />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(false)
const checked5 = ref(false)
const checked6 = ref(false)
const checked7 = ref(false)
const checked8 = ref(false)
</script>