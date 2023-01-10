<template>
  <br />
  <div>
    <my-radio v-model="radio1" label="1">Option 1</my-radio>
    <my-radio v-model="radio1" label="2">Option 2</my-radio>
    <my-radio v-model="radio1" label="1" disabled>Option 3</my-radio>
    <my-radio v-model="radio1" label="2" disabled>Option 4</my-radio>
  </div>
  <br />
  <div>
    <my-radio v-model="radio2" label="1" border>Option A</my-radio>
    <my-radio v-model="radio2" label="2" border>Option B</my-radio>
    <my-radio v-model="radio2" label="1" border disabled>Option C</my-radio>
    <my-radio v-model="radio2" label="2" border disabled>Option D</my-radio>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const radio1 = ref('1')
const radio2 = ref('1')
</script>
