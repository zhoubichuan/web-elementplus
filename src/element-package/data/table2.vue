<template>
  <!-- 表格区域 -->
  <web-table :data="data" :column-data="column" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const data = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
])
const column = ref([
  {
    prop: "date",
    label: "date",
    width: '120px'
  },
  {
    prop: "name",
    label: "name",
    width: '120px'
  },
  {
    prop: "address",
    label: "address",
  },
])
</script>

<style lang="scss" scoped></style>
