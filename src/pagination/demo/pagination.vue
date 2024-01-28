<template>
  <web-pagination
    :total="total"
    @current-change="handleCurrentChange"
    @size-change="handleSizeChange"
    :page-size="pageSize"
    :page-sizes="[10, 20, 50, 100]"
    :current-page="page"
  >
  </web-pagination>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const total = ref(100)
const pageSize = ref(10)
const page = ref(1)
const handleCurrentChange = (val: number) => {
  page.value = val
}
const handleSizeChange = (val: number) => {
  pageSize.value = val
  page.value = 1
}
</script>
