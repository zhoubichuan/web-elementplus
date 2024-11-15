<template>
  <el-card class="page-search" style="margin-top: 10px">
    <web-form size="middle" ref="searchInfoRef" :model="formModel" label-width="120px">
      <template v-if="searchForm.length">
        <web-form-item v-for="(formItem, formItemIndex) in searchForm" :formData="formItem" :key="formItemIndex"
          label-width="70px" />
      </template>
      <el-row>
        <!-- 查询 重置按钮 -->
        <el-col :offset="searchForm.length ? 1 : 0" :span="200" style="width: 100%">
          <el-button @click="formCreate" type="primary">
            <slot> 创建 </slot>
          </el-button>
          <div v-if="searchForm.length" style="float: right">
            <el-button :icon="Refresh" @click="resetSearchForm">重置</el-button>
            <el-button :icon="Search" @click="handlerSearch" type="primary">查询</el-button>
          </div>
        </el-col>
      </el-row>
    </web-form>
  </el-card>
</template>

<script setup lang="ts" name="WebFormSearch">
import { reactive,provide } from 'vue'
import WebFormItem from '../../form-item/index'
import { Refresh, Search } from '@element-plus/icons-vue'
const { formCreate, searchForm, reloadFn } = defineProps({
  formCreate: {
    type: Function,
    default: () => { }
  },
  searchForm: {
    type: Array,
    default: () => []
  },
  reloadFn: {
    type: Function,
    default: () => { }
  },
})
// 查询参数
const formModel = reactive<Record<string, string | number | undefined>>({})
const init = () => searchForm.forEach(child => {
  child.forEach(item => {
    if (item.prop) {
      formModel[item.prop] = item.init || ''
    }
  })
})
init()
const handlerSearch = () => {
  reloadFn(formModel)
}
const resetSearchForm = () => {
  init()
  reloadFn(formModel)
}
provide('formModel', formModel)
defineOptions({
  name: 'WebFormSearch'
})
</script>

<style lang="scss" scoped></style>
