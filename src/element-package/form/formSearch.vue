<template>
  <web-form-search :formCreate="handleFormCreate" :searchForm="searchForm" :reloadFn="reloadData">xxx</web-form-search>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import dayjs from 'dayjs'
// import { useBaseTableByApi } from './useBaseTableByApi'
const time = ref('')
const chooseTime = (res: any) => {
  getTopicParam.startTime = res ? dayjs(res).valueOf() + '' : undefined
}
const reloadData = () =>{
  
}
//弹框
const submitDialogVisible = ref(false)
// 表单修改
const currentRowData = ref<any>({
  relatedId: '',
  type: '0',
  count: '',
  name: '',
  remark: ''
})
// 查询参数
const getTopicParam = reactive<Record<string, string | number | undefined>>({
  currentPage: 1,
  pageSize: 20,
  name: '',
  creator: '',
  id: '',
  startTime: ''
})

// 表单创建
const handleFormCreate = () => {
  submitDialogVisible.value = true
  currentRowData.value = {
    id: '',
    relatedId: '',
    type: '0',
    count: '',
    name: '',
    remark: ''
  }
}

// 详情查看
const searchForm = [
  [
    {
      prop: 'name',
      label: '名称',
      component:{
        'v-model':getTopicParam.name
      }
    },
    {
      prop: 'creator',
      label: '创建人',
      component:{
        modelValue: getTopicParam.creator,
        'onUpdate:modelValue': (value: string) => (getTopicParam.creator = value)
      }
    },
    {
      prop: 'id',
      label: 'id',
      component:{
        modelValue: getTopicParam.id,
        'onUpdate:modelValue': (value: string) => (getTopicParam.id = value)
      }
    },
    {
      prop: 'time',
      label: '铸造时间',
      component:{
        is:'el-date-picker',
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
