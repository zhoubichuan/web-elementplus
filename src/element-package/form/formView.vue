<template>
  <web-dialog v-bind="{ ...$attrs, close }">
    <el-form ref="formRef" :model="formData" label-width="80px">
      <web-form-item v-for="(formItem, formItemIndex) in baseFormData" :formData="formItem" :key="formItemIndex" />
    </el-form>
  </web-dialog>
</template>

<script setup lang="ts">
import { ref, toRefs, watch, unref, } from 'vue'
import { ElForm, ElMessage } from 'element-plus'
const props = defineProps<{ close: () => void, initData: any | undefined }>()
const { close } = toRefs(props)
const modelTypes = ref<Array<any>>([
  {
    value: '1',
    desc: '模型',
  },
  {
    value: '2',
    desc: '资产',
  },
])
const initFormData: any = {
  relatedId: 'sssss',
  type: '1',
  count: '中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国',
  name: '小明',
  remark: '中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国',
}

const formRef = ref<InstanceType<typeof ElForm>>()
const formData = ref<any>(initFormData)


const baseFormData = [
  [
    {
      prop: 'type',
      label: "关联项目",
      render: modelTypes.value.find(i => i.value == formData.value.type)?.desc,
    },
  ],
  [
    {
      prop: 'name',
      label: "名称",
      render: formData.value.name
    },
    {
      prop: 'count',
      label: "铸造数量",
      render: formData.value.count
    }
  ],
  [
    {
      prop: 'relatedId',
      label: "模型id",
      render: formData.value.relatedId
    }
  ],
  [
    {
      prop: 'remark',
      label: "remark",
      render: formData.value.remark
    }
  ],
]

</script>
<style lang="scss" scoped></style>
