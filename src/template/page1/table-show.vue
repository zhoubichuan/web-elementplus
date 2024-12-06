<template>
  <web-table :table-config="Confit" :table-data="tableData ?? []" :page-info="pageInfo"
    @changePageSize="handleSizeChange" @changeCurrentPage="handleCurrentChange">
    <template #handler="scope">
      <div>
        <el-button size="mini" type="text" @click="singleView(unref(scope.row))">查看</el-button>
        <el-button :disabled="scope.row.ntfCreateStatus == 0" size="mini" type="text"
          @click="singleEdit(unref(scope.row))">编辑</el-button>
        <el-button size="mini" type="text">
          <RouterLink :to="'/admin//detail?id=' + scope.row.id">明细</RouterLink>
        </el-button>
      </div>
    </template>
  </web-table>
</template>
<script lang="ts" setup>
import { defineExpose, unref } from 'vue'
import { Confit } from './config/table.config'
import { reactive } from 'vue'
import { ListItem } from '@/api/type'
const emits = defineEmits(['edit', 'view'])
const singleEdit = (value: ListItem) => {
  emits('edit', value)
}
// 表单查看
const singleView = async (value: ListItem) => {
  emits('view', value)
}
// 查询参数
const getSearchParams = reactive<Record<string, string | number | undefined>>({})
const { tableData, pageInfo, reloadData, handleCurrentChange, handleSizeChange } = {
  tableData: [], pageInfo: {}, reloadData:()=> [], handleCurrentChange: () => { }, handleSizeChange: () => { }
}
defineExpose({
  reloadData: val => {
    if (val) {
      Object.keys(val).forEach(key => {
        getSearchParams[key] = val[key]
      })
    }
    reloadData()
  },
  handleCurrentChange,
  handleSizeChange,
  getSearchParams: () => getSearchParams
})
</script>
