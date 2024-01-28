<template>
  <br />
  <div>
    <web-radio v-model="radio1" label="1">Option 1</web-radio>
    <web-radio v-model="radio1" label="2">Option 2</web-radio>
    <web-radio v-model="radio1" label="1" disabled>Option 3</web-radio>
    <web-radio v-model="radio1" label="2" disabled>Option 4</web-radio>
  </div>
  <br />
  <div>
    <web-radio v-model="radio2" label="1" border>Option A</web-radio>
    <web-radio v-model="radio2" label="2" border>Option B</web-radio>
    <web-radio v-model="radio2" label="1" border disabled>Option C</web-radio>
    <web-radio v-model="radio2" label="2" border disabled>Option D</web-radio>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const radio1 = ref('1')
const radio2 = ref('1')
</script>
