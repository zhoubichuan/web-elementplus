<template>
  <el-form-item ref="formRef" style="max-width: 600px" :model="numberValidateForm" label-width="auto"
    class="demo-ruleForm">
    <template #default="scoped">
      <slot name="default" v-bind="scoped"></slot>
    </template>
    <template #label="scoped">
      <slot name="label" v-bind="scoped"></slot>
    </template>
    <template #error="scoped">
      <slot name="error" v-bind="scoped"></slot>
    </template>
  </el-form-item>
</template>

<script lang="ts" setup>
import { ElFormItem } from 'element-plus'
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

const formRef = ref<FormInstance>()

const numberValidateForm = reactive({
  age: '',
})

</script>
<script lang='ts'>
export default {
  name: "WebFormItem"
}
</script>