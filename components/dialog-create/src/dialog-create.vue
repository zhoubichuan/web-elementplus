<template>
  <web-dialog @reloadList="reloadData" v-bind="$attrs" @handleCancel="close" @handleConfirm="handleSubmit">
    <web-form ref="formRef" :rules="rules" :model="formModel" label-width="80px">
      <web-form-item v-for="(formItem, formItemIndex) in creteForm" :formData="formItem" :key="formItemIndex" />
    </web-form>
  </web-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps, provide, defineEmits } from 'vue'
import { ElForm, ElMessage } from 'element-plus'
import WebForm from '../../form/index'
import WebFormItem from '../../form-item/index'

const { close, request, creteForm } = defineProps<{
  rules:Object,
  close: Function
  request: Function
  creteForm: any
}>()
// 查询参数
const formModel = reactive<Record<string, string | number | undefined>>({})
const init = () => creteForm.forEach(child => {
  child.forEach(item => {
    if (item.prop) {
      formModel[item.prop] = item.init || ''
    }
  })
})
init()
const submit = () => {
  request(formModel)
}
provide('formModel', formModel)


const dialogTitle = ref('创建')
const formRef = ref<InstanceType<typeof ElForm>>()
const emit = defineEmits(['reloadList', 'update:modelValue'])

const handleSubmit = () => {
  formRef.value?.validate(async (valid: any) => {
    if (valid) {
      let params: any = { ...formModel }
      params.type = Number(params.type)
      const { c } = await submit(formModel)
      if (c == 200) {
        ElMessage.success(dialogTitle.value + '成功')
        emit('reloadList')
        close()
      }
    }
  })
}

</script>
<script lang='ts'>
export default {
  name: "WebDialogCreate"
}
</script>
<style>
.el-cascader-menu__wrap {
  .el-cascader-node {
    padding: 0 !important;
  }
}
</style>
