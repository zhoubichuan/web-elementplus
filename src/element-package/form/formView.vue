<template>
  <web-form-view title="查看xxx" :data="data" v-model="show" :close="handleClose"/>
  <web-button @click="handleView">查看</web-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const initFormData: any = {
  relatedId: 'sssss',
  type: '1',
  count: '中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国',
  name: '小明',
  remark: '中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国',
}
const formData = ref<any>(initFormData)
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
const data = ref(
  [
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
)
const handleView = () =>{
  show.value = true
}
const handleClose = () => {
  show.value = false
}
//查看状态
const show = ref(false)

</script>
<style lang="scss" scoped></style>
