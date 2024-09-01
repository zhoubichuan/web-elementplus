<template>
  <el-form ref="formRef" style="max-width: 600px" :model="numberValidateForm" label-width="auto" class="demo-ruleForm">
    <slot></slot>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

const formRef = ref<FormInstance>()

const numberValidateForm = reactive({
  age: '',
})

</script>
<script lang='ts'>
export default {
  name: "WebForm"
}
</script>