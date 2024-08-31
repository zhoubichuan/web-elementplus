<template>
  <form-view title="查看NFT" v-model="viewDialogVisible" :close="handleClose" :initData="currentRowData"></form-view>
  <web-button @click="handleView">查看</web-button>
</template>

<script setup lang="ts">
import { reactive, ref, nextTick } from 'vue'
import formView from './formView.vue'

// 表单修改
const currentRowData = ref<any>({
  relatedId: '',
  type: '0',
  count: '',
  name: '',
  remark: ''
})
const handleView = () =>{
  viewDialogVisible.value = true
}
const handleClose = () => {
  viewDialogVisible.value = false
}
//查看状态
const viewDialogVisible = ref(false)

</script>
<style lang="scss" scoped></style>
