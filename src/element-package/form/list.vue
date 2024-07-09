<template>
    <BaseTable :table-config="tableConfig" :table-data="tableData ?? []" :page-info="pageInfo"
      @changePageSize="handleSizeChange" @changeCurrentPage="handleCurrentChange">
      <template #handler="scope">
        <div>
          <el-button size="mini" type="text" @click="singleView(scope.row)">查看</el-button>
          <el-button size="mini" type="text" @click="singleEdit(scope.row)">编辑</el-button>
          <el-button @click="viewDetail()" size="mini" type="text">
            <RouterLink to="/admin/nft/detail">NFT明细</RouterLink>
          </el-button>
        </div>
      </template>
    </BaseTable>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

//弹框
const submitDialogVisible = ref(false)
// 表单修改
const currentRowData = ref<any>({
  relatedId: '',
  type: '1',
  count: '',
  name: '',
  remark: '',
})
// 查询参数
const getTopicParam = reactive<Record<string, string | number | undefined>>({
  currentPage: 1,
  pageSize: 20,
  name: '',
  creatorName: '',
  spuid: '',
  startTime: '',
})
const handleClose = () => {
  submitDialogVisible.value = false
}
//查看状态
const viewDialogVisible = ref(false)
// 表单创建
const handleFormCreate = () => {
  submitDialogVisible.value = true
  currentRowData.value = {
    "id": '',
    "relatedId": '',
    "type": 0,
    "count": '',
    "name": "",
    "remark": ""
  }
}

const singleEdit = (value: any) => {
  const { id, relatedId, type, count, name, remark } = value
  currentRowData.value = { id, relatedId, type, count, name, remark }
  console.log(currentRowData.value, 'currentRowData')
  submitDialogVisible.value = true
}
// 表单查看
const singleView = (value: any) => {
  const { id, relatedId, type, count, name, remark } = value
  currentRowData.value = { id, relatedId, type, count, name, remark }
  viewDialogVisible.value = true
}
// 详情查看
const viewDetail = () => {

}
</script>
<style lang="scss" scoped></style>
