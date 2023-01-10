<template>
  <br />
  <div>
    <my-checkbox v-model="checked1" label="1">Option 1</my-checkbox>
    <my-checkbox v-model="checked2" label="2">Option 2</my-checkbox>
    <my-checkbox v-model="checked1" label="1" disabled>Option 3</my-checkbox>
    <my-checkbox v-model="checked2" label="2" disabled>Option 4</my-checkbox>
  </div>
  <br />
  <div>
    <my-checkbox v-model="checked3" label="1" border>Option A</my-checkbox>
    <my-checkbox v-model="checked4" label="2" border>Option B</my-checkbox>
    <my-checkbox v-model="checked3" label="1" border disabled>Option C</my-checkbox>
    <my-checkbox v-model="checked4" label="2" border disabled>Option D</my-checkbox>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const checked1 = ref('1')
const checked2 = ref('1')
const checked3 = ref('1')
const checked4 = ref('1')
</script>
