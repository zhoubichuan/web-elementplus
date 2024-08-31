<template>
  <form-submit :title="currentRowData?.id ? '编辑NFT' : '创建NFT'" v-model="submitDialogVisible" :close="handleClose"
    @reloadList="reloadData" :initData="currentRowData"></form-submit>
</template>

<script setup lang="ts">
import { reactive, ref, nextTick } from 'vue'
import formSubmit from './formSubmit.vue'
// import { useBaseTableByApi } from './useBaseTableByApi'

//弹框
const submitDialogVisible = ref(false)
// 表单修改
const currentRowData = ref<any>({
  relatedId: '',
  type: '0',
  count: '',
  name: '',
  remark: ''
})
// 查询参数
const getTopicParam = reactive<Record<string, string | number | undefined>>({
  currentPage: 1,
  pageSize: 20,
  name: '',
  creator: '',
  id: '',
  startTime: ''
})

const handleClose = () => {
  submitDialogVisible.value = false
}


// const { reloadData } = useBaseTableByApi<any>(
//   getNftList,
//   getTopicParam
// )
</script>
<style lang="scss" scoped></style>
