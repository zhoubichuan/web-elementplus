<template>
  <web-form-search :model="getTopicParam" :formCreate="handleFormCreate" :searchForm="searchForm"
    :reloadFn="reloadData" />
</template>

<script setup lang="ts">
import { reactive, ref, defineProps } from 'vue'
import dayjs from 'dayjs'
// import { useBaseTableByApi } from './useBaseTableByApi'
const time = ref('')
const chooseTime = (res: any) => {
  getTopicParam.startTime = res ? dayjs(res).valueOf() + '' : undefined
}
const { model } = defineProps({
  model: {
    type: Object,
    default: {},
  }
})
const reloadData = () => {
  alert('search')
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
      component: {
        'v-model': getTopicParam.name
      }
    },
    {
      prop: 'creator',
      label: '创建人',
      component: {
        modelValue: getTopicParam.creator,
        'onUpdate:modelValue': (value: string) => {
          debugger
          return (getTopicParam.creator = value)
        }
      }
    },
    {
      prop: 'id',
      label: 'id',
      component: {
        modelValue: getTopicParam.id,
        'onUpdate:modelValue': (value: string) => (getTopicParam.id = value)
      }
    },
    {
      prop: 'time',
      label: '铸造时间',
      component: {
        is: 'el-date-picker',
        modelValue: time,
        'onUpdate:modelValue': (value: string) => (time.value = value),
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
