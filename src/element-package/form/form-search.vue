<template>
  <web-form-search :formCreate="handleFormCreate" :searchForm="searchForm" :reloadFn="reloadData" />
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import dayjs from 'dayjs'
const time = ref(dayjs().valueOf())
const chooseTime = (res: any) => {
  getTopicParam.startTime = res ? dayjs(res).valueOf() + '' : undefined
}
const { model } = defineProps({
  model: {
    type: Object,
    default: {},
  }
})
const reloadData = (formModel) => {
  console.log(formModel, 'formModel')
}

// 查询参数
const getTopicParam = reactive<any>(model)

// 表单创建
const handleFormCreate = () => {
}
// 详情查看
const searchForm = [
  [
    {
      prop: 'name',
      label: '名称',
      type: 'input',
    },
    {
      prop: 'creator',
      label: '创建人',
      type: 'input',
    },
    {
      prop: 'id',
      label: 'id',
      type: 'input',
    },
    {
      prop: 'time',
      label: '时间',
      type: 'el-date-picker',
      init: time,
      component: {
        type: 'date',
        placeholder: '选择日期',
        onChange: chooseTime
      }
    }
  ]
]
// const { reloadData } = useBaseTableByApi<any>(

// )
</script>
<style lang="scss" scoped></style>
