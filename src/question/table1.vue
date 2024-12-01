<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" class-name="table-column1" />
    <el-table-column prop="name" label="Name" class-name="table-column2" />
    <el-table-column prop="address" label="Address" width="180rem" />
  </el-table>
</template>

<script lang="ts" setup>
const tableData = [
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
]
</script>

<style scoped>
.table-column1,
.table-column2 {
  color:red;
  width: 1.8rem;
}
</style>