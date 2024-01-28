<template>
  <br />
  <h2>有分页表格</h2>

  <web-table :data="tableData" :pagination="pagination">
    <web-table-column prop="date" label="Date" width="180" />
    <web-table-column prop="name" label="Name" width="180" />
    <web-table-column prop="address" label="Address" />
  </web-table>

  <h2>无分页表格</h2>
  <web-table :data="tableData">
    <web-table-column prop="date" label="Date" width="180" />
    <web-table-column prop="name" label="Name" width="180" />
    <web-table-column prop="address" label="Address" />
  </web-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const total = ref(100)
const pageSize = ref(10)
const page = ref(1)
const currentChange = (val: number) => {
  page.value = val
}
const sizeChange = (val: number) => {
  pageSize.value = val
  page.value = 1
}
const pagination = {
  total,
  pageSize,
  page,
  currentChange,
  sizeChange
}

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
</script>
