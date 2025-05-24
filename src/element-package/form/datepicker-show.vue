<template>
  显示 {{ value1 }}
  <web-date-picker v-model="value1" placeholder="选择日期" type="datetimerange" format="YYYY-MM-DD" start-placeholder="开始日期"
    end-placeholder="结束日期" date-format="YYYY/MM/DD" value-format="x" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value1 = ref([1746028800000, 1748620800000])
</script>
