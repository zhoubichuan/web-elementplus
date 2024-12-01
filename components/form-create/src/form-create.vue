<template>
  <web-form ref="formRef" :model="formModel" label-width="80px" v-bind="$attrs">
    <web-form-item v-for="(formItem, formItemIndex) in formData" :formData="formItem" :key="formItemIndex" />
  </web-form>
</template>

<script setup lang="ts" name="WebFormCreate">
import { ref, reactive, provide } from 'vue'
import WebForm from '../../form/index'
import WebFormItem from '../../form-item/index'

const { request, formData } = defineProps({
  request: {
    type: Function,
    default: () => {}
  },
  formData: {
    type: Array,
    default: () => []
  }
})

const formRef = ref<InstanceType<typeof WebForm>>()

// 查询参数
const formModel = reactive<Record<string, string | number | undefined>>({})
const init = () =>
  formData.forEach(child => {
    child.forEach(item => {
      if (item.prop) {
        formModel[item.prop] = item.init || ''
      }
    })
  })
init()

provide('formModel', formModel)
const emit = defineEmits(['reloadList', 'update:modelValue', 'handleChange'])

const validate = () => {
  formRef.value?.validate(async (valid: any) => {
    if (valid) {
      request(formModel)
    }
  })
}

defineExpose({
  validate
})
defineOptions({
  name: 'WebFormCreate'
})
</script>
