<template>
  <el-form ref="formRef" :model="numberValidateForm" label-width="auto" class="demo-ruleForm" v-bind="$attrs">
    <template #default="scoped">
      <slot name="default" v-bind="scoped"></slot>
    </template>
  </el-form>
</template>

<script lang="ts" setup>
import { ElForm } from 'element-plus'
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