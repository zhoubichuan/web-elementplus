<template>
  <br />

  <p>日期选择框</p>
  <web-date-picker v-model="value1" type="date" placeholder="Pick a day"></web-date-picker>
  <p>日期范围选择框</p>
  <web-date-picker
    v-model="value2"
    type="daterange"
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
  >
  </web-date-picker>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value1 = ref('')
const value2 = ref('')
</script>
