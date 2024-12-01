<template>
  <web-table-operation :data="data" :column="column" @operation="handleOperation" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const handleOperation = () => {
  alert(1)
}
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
const column = [
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
]
</script>
