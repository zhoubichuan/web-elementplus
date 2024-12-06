<template>
  <form-search :formCreate="handleFormCreate" :search-form="searchForm" :reloadFn="handleSearch"> 创建</form-search>
</template>
<script lang="ts" setup>
import { NftSearchType } from './type.d'
import formSearch from 'web-components/form-search/index'
import dayjs from 'dayjs'
import { searchForm } from './config/search.config'

// 表单创建
const emits = defineEmits(['create', 'search'])
const handleFormCreate = () => {
  emits('create')
}
// 搜索请求
const handleSearch = (params: NftSearchType) => {
  if (params.createTime) {
    params.createTime = dayjs(params.createTime).format('YYYY-MM-DD')
  }
  emits('search', params)
}
</script>
