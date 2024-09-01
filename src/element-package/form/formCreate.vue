<template>
  <web-form-submit title="创建xx" v-model="show" :close="handleClose" @reloadList="reloadData"
    :initData="currentRowData" />
  <web-button @click="handleCreate">创建</web-button>
</template>

<script setup lang="ts">
import { reactive, ref, nextTick } from 'vue'
const show = ref(false)
const create = ref(false)
const handleCreate = () => {
  show.value = true
  create.value = true
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


</script>
<style lang="scss" scoped></style>
