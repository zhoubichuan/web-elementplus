<template>
  <web-dialog-view size="big"  title="查看xxx" :creteForm="data" v-model="show" :close="handleClose" />
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
    desc: 'adfasdfad',
  },
  {
    value: '2',
    desc: 'asdfqweqsdfasd',
  },
])
const data = ref(
  [
    [
      {
        prop: 'type',
        label: "xx项目",
        type: 'div',
        init: modelTypes.value.find(i => i.value == formData.value.type)?.desc,
      },
    ],
    [
      {
        prop: 'name',
        label: "名称",
        type: 'div',
        init: formData.value.name
      },
      {
        prop: 'count',
        label: "xx数量",
        type: 'div',
        init: formData.value.count
      }
    ],
    [
      {
        prop: 'relatedId',
        label: "asdfid",
        type: 'div',
        init: formData.value.relatedId
      }
    ],
    [
      {
        prop: 'remark',
        label: "dddd",
        type: 'div',
        init: formData.value.remark
      }
    ],
  ]
)
const handleView = () => {
  show.value = true
}
const handleClose = () => {
  show.value = false
}
//查看状态
const show = ref(false)

</script>
<style lang="scss" scoped></style>
