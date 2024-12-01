<template>
  <web-table-operation :data="data" :column="column" @operation="handleOperation" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const handleOperation = (row) => {
  alert(row.name)
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
    type: 'index',
    label: '序号',
    index: (index: number) => index + 1,
    width: '80px',
    align: 'center',
    headerAlign: 'center'
  },
  {
    prop: "date",
    label: "日期",
    width: '120px',
    headerAlign: 'center',
    sortable: true
  },
  {
    prop: "name",
    label: "姓名",
    width: '120px',
    headerAlign: 'center',
    sortable: true
  },
  {
    prop: "address",
    label: "地址",
    headerAlign: 'center',
    sortable: true
  },
  {
    label: '操作',
    align: 'center',
    headerAlign: 'center',
    slotable: true,
    name: 'operation',
    component: {
      is: 'web-button',
      class: 'link-text',
      text: '查看'
    }
  }
]
</script>
