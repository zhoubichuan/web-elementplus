<template>
  <web-form-submit title="编辑xxx" v-model="show" :close="handleClose" @reloadList="reloadData"
    :initData="currentRowData"/>
  <web-button @click="handleEdit">编辑</web-button>
</template>

<script setup lang="ts">
import { reactive, ref, nextTick } from 'vue'
const show = ref(false)
const create = ref(false)
const edit = ref(false)
const handleEdit = () => {
  show.value = true
  edit.value = true
}
const handleClose = () => {
  show.value = false
  create.value = false
}
// 表单修改
const currentRowData = ref<any>({
  relatedId: '',
  type: '0',
  count: '',
  name: '',
  remark: ''
})

// const { reloadData } = useBaseTableByApi<any>(
//   getNftList,
//   getTopicParam
// )
</script>
<style lang="scss" scoped></style>
