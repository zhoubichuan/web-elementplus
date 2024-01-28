<template>
  <br />
  <div>
    <web-checkbox v-model="checked1" label="1">Option 1</web-checkbox>
    <web-checkbox v-model="checked2" label="2">Option 2</web-checkbox>
    <web-checkbox v-model="checked1" label="1" disabled>Option 3</web-checkbox>
    <web-checkbox v-model="checked2" label="2" disabled>Option 4</web-checkbox>
  </div>
  <br />
  <div>
    <web-checkbox v-model="checked3" label="1" border>Option A</web-checkbox>
    <web-checkbox v-model="checked4" label="2" border>Option B</web-checkbox>
    <web-checkbox v-model="checked3" label="1" border disabled>Option C</web-checkbox>
    <web-checkbox v-model="checked4" label="2" border disabled>Option D</web-checkbox>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const checked1 = ref('1')
const checked2 = ref('1')
const checked3 = ref('1')
const checked4 = ref('1')
</script>
